"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dos-bg flex items-center justify-center p-4">
      <div className="border border-dos-border p-6 max-w-lg w-full">
        <div className="dos-red text-lg mb-4">
          ERROR: An unexpected error occurred
        </div>
        <div className="dos-highlight mb-4 font-mono text-sm">
          {error.message || "Unknown error"}
        </div>
        {error.digest && (
          <div className="dos-cyan text-xs mb-4">
            Error ID: {error.digest}
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={reset}
            className="px-4 py-2 border border-dos-border dos-highlight hover:bg-dos-highlight hover:text-dos-bg transition-colors"
          >
            RETRY
          </button>
          <button
            onClick={() => window.location.href = "/"}
            className="px-4 py-2 border border-dos-border dos-highlight hover:bg-dos-highlight hover:text-dos-bg transition-colors"
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
}
