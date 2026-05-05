import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

describe("hero assets", () => {
  it("keeps separate light and dark hand backgrounds referenced by the hero", () => {
    expect(existsSync(join(root, "public/hero-hands.png"))).toBe(true);
    expect(existsSync(join(root, "public/hero-hands-dark.png"))).toBe(true);

    const heroSource = readFileSync(join(root, "components/sections/Hero.tsx"), "utf8");

    expect(heroSource).toContain("/hero-hands.png");
    expect(heroSource).toContain("/hero-hands-dark.png");
  });
});
