import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { chromium } from "playwright";
import { buildResumeDocument } from "../lib/resume/model";
import { renderResumeMarkdown } from "../lib/resume/markdown";
import type { ResumeLanguage } from "../lib/resume/types";

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "out", "resume");
const languages: readonly ResumeLanguage[] = ["ko", "en"];

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function findAvailablePort() {
  return new Promise<number>((resolve, reject) => {
    const server = net.createServer();

    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();

      if (!address || typeof address === "string") {
        server.close(() => reject(new Error("Unable to resolve an available local port")));
        return;
      }

      const { port } = address;
      server.close(() => resolve(port));
    });
  });
}

async function waitForResumeServer(port: number) {
  const url = `http://127.0.0.1:${port}/resume?lang=ko`;
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return;
      }
    } catch {
      await wait(500);
    }
  }

  throw new Error(`Resume preview server did not become ready: ${url}`);
}

function startResumeServer(port: number) {
  return spawn("npx", ["next", "dev", "--hostname", "127.0.0.1", "--port", String(port)], {
    cwd: rootDir,
    env: {
      ...process.env,
      RESUME_ENABLED: "1",
      NEXT_TELEMETRY_DISABLED: "1",
    },
    stdio: "pipe",
  });
}

async function stopProcess(child: ChildProcessWithoutNullStreams) {
  if (child.exitCode !== null || child.signalCode !== null) {
    return;
  }

  child.kill("SIGTERM");
  await wait(500);

  if (child.exitCode === null && child.signalCode === null) {
    child.kill("SIGKILL");
  }
}

async function writeMarkdownFiles() {
  await mkdir(outputDir, { recursive: true });

  for (const language of languages) {
    const resume = buildResumeDocument(language);
    await writeFile(path.join(outputDir, `${resume.filenameBase}.md`), renderResumeMarkdown(resume), "utf8");
  }
}

async function writePdfFiles(port: number) {
  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();

    for (const language of languages) {
      const resume = buildResumeDocument(language);
      await page.goto(`http://127.0.0.1:${port}/resume?lang=${language}`, { waitUntil: "networkidle" });
      await page.pdf({
        path: path.join(outputDir, `${resume.filenameBase}.pdf`),
        format: "A4",
        printBackground: true,
      });
    }
  } finally {
    await browser.close();
  }
}

async function main() {
  const port = process.env.RESUME_PORT ? Number(process.env.RESUME_PORT) : await findAvailablePort();

  await writeMarkdownFiles();

  const server = startResumeServer(port);

  try {
    await waitForResumeServer(port);
    await writePdfFiles(port);
  } finally {
    await stopProcess(server);
  }

  console.log(`Resume files written to ${path.relative(rootDir, outputDir)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
