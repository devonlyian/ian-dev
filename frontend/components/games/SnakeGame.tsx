"use client";

import { useSnakeGame } from "@/hooks/useSnakeGame";

interface SnakeGameProps {
  onExit: () => void;
}

export default function SnakeGame({ onExit }: SnakeGameProps) {
  const game = useSnakeGame(onExit);

  // Render the game grid as ASCII art
  const renderGrid = () => {
    const rows: string[] = [];

    // Top border
    rows.push("╔" + "═".repeat(game.gridWidth * 2) + "╗");

    for (let y = 0; y < game.gridHeight; y++) {
      let row = "║";
      for (let x = 0; x < game.gridWidth; x++) {
        const isHead = game.snake[0].x === x && game.snake[0].y === y;
        const isBody = game.snake.slice(1).some((s) => s.x === x && s.y === y);
        const isFood = game.food.x === x && game.food.y === y;

        if (isHead) {
          row += "██";
        } else if (isBody) {
          row += "▓▓";
        } else if (isFood) {
          row += "◆◆";
        } else {
          row += "  ";
        }
      }
      row += "║";
      rows.push(row);
    }

    // Bottom border
    rows.push("╚" + "═".repeat(game.gridWidth * 2) + "╝");

    return rows;
  };

  return (
    <div className="font-mono">
      {/* Header */}
      <div className="dos-yellow mb-2 text-center">
        ╔══════════════════════════════════════════╗
      </div>
      <div className="dos-yellow text-center">
        ║           🐍 SNAKE GAME 🐍                ║
      </div>
      <div className="dos-yellow mb-2 text-center">
        ╚══════════════════════════════════════════╝
      </div>

      {/* Score */}
      <div className="flex justify-between mb-2 px-2">
        <span className="dos-cyan">Score: {game.score}</span>
        <span className="dos-green">High Score: {game.highScore}</span>
      </div>

      {/* Game grid with overlay */}
      <div className="relative">
        <div className="dos-highlight text-center whitespace-pre leading-tight">
          {renderGrid().map((row, i) => (
            <div key={i}>{row}</div>
          ))}
        </div>

        {/* Game status overlay */}
        {(game.gameOver || game.isPaused) && (
          <div className="absolute inset-0 flex items-center justify-center bg-dos-bg/80">
            {game.gameOver ? (
              <div className="text-center">
                <div className="dos-red text-lg mb-2">GAME OVER!</div>
                <div className="dos-text">Final Score: {game.score}</div>
                <div className="dos-cyan mt-2 hidden sm:block">[SPACE] or [R] to restart</div>
              </div>
            ) : (
              <div className="text-center">
                <div className="dos-yellow text-lg">PAUSED</div>
                <div className="dos-cyan hidden sm:block">[SPACE] to continue</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Touch Controls */}
      <div className="mt-4 sm:hidden">
        {/* Exit button */}
        <div className="flex justify-center mb-3">
          <button
            onClick={onExit}
            className="px-4 py-2 border-2 border-dos-red bg-dos-bg dos-red text-sm active:bg-dos-red active:text-dos-bg touch-manipulation"
            aria-label="Exit game"
          >
            ✕ EXIT
          </button>
        </div>
        {/* Direction controls */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => game.changeDirection("UP")}
            className="w-14 h-14 border-2 border-dos-border bg-dos-bg dos-highlight text-2xl active:bg-dos-highlight active:text-dos-bg touch-manipulation"
            aria-label="Move up"
          >
            ▲
          </button>
          <div className="flex gap-1">
            <button
              onClick={() => game.changeDirection("LEFT")}
              className="w-14 h-14 border-2 border-dos-border bg-dos-bg dos-highlight text-2xl active:bg-dos-highlight active:text-dos-bg touch-manipulation"
              aria-label="Move left"
            >
              ◀
            </button>
            <button
              onClick={() => game.isPaused || game.gameOver ? (game.gameOver ? game.restart() : game.togglePause()) : game.togglePause()}
              className="w-14 h-14 border-2 border-dos-border bg-dos-bg dos-cyan text-xs active:bg-dos-highlight active:text-dos-bg touch-manipulation"
              aria-label={game.gameOver ? "Restart" : game.isPaused ? "Resume" : "Pause"}
            >
              {game.gameOver ? "PLAY" : game.isPaused ? "GO" : "❚❚"}
            </button>
            <button
              onClick={() => game.changeDirection("RIGHT")}
              className="w-14 h-14 border-2 border-dos-border bg-dos-bg dos-highlight text-2xl active:bg-dos-highlight active:text-dos-bg touch-manipulation"
              aria-label="Move right"
            >
              ▶
            </button>
          </div>
          <button
            onClick={() => game.changeDirection("DOWN")}
            className="w-14 h-14 border-2 border-dos-border bg-dos-bg dos-highlight text-2xl active:bg-dos-highlight active:text-dos-bg touch-manipulation"
            aria-label="Move down"
          >
            ▼
          </button>
        </div>
      </div>

      {/* Desktop Controls */}
      <div className="mt-4 dos-text text-sm hidden sm:block">
        <div className="text-center mb-2 dos-cyan">─── Controls ───</div>
        <div className="flex justify-center gap-8">
          <div>
            <div>↑/W - Up</div>
            <div>↓/S - Down</div>
            <div>←/A - Left</div>
            <div>→/D - Right</div>
          </div>
          <div>
            <div>[SPACE] - Pause</div>
            <div>[R] - Restart</div>
            <div>[ESC] - Exit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
