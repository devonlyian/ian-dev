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

      {/* Game grid */}
      <div className="dos-highlight text-center whitespace-pre leading-tight">
        {renderGrid().map((row, i) => (
          <div key={i}>{row}</div>
        ))}
      </div>

      {/* Game status */}
      {game.gameOver && (
        <div className="mt-4 text-center">
          <div className="dos-red text-lg mb-2">GAME OVER!</div>
          <div className="dos-text">Final Score: {game.score}</div>
          <div className="dos-cyan mt-2">[SPACE] or [R] to restart</div>
        </div>
      )}

      {game.isPaused && !game.gameOver && (
        <div className="mt-4 text-center">
          <div className="dos-yellow text-lg">PAUSED</div>
          <div className="dos-cyan">[SPACE] to continue</div>
        </div>
      )}

      {/* Controls */}
      <div className="mt-4 dos-text text-sm">
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
