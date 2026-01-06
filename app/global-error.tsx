"use client";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
        <div className="border border-yellow-500 p-6 max-w-lg w-full bg-black">
          <div className="text-red-500 text-lg mb-4">
            FATAL ERROR: Application crashed
          </div>
          <div className="text-yellow-500 mb-4 text-sm">
            {error.message || "Unknown error"}
          </div>
          {error.digest && (
            <div className="text-cyan-500 text-xs mb-4">
              Error ID: {error.digest}
            </div>
          )}
          <div className="flex gap-2">
            <button
              onClick={reset}
              className="px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
            >
              RETRY
            </button>
            <button
              onClick={() => window.location.href = "/"}
              className="px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
            >
              HOME
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
