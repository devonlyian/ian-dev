export function isResumeEnabled(env: NodeJS.ProcessEnv = process.env) {
  return env.RESUME_ENABLED === "1";
}
