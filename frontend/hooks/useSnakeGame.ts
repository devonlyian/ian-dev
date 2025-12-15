"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
export type Position = { x: number; y: number };

export interface SnakeGameState {
  snake: Position[];
  food: Position;
  direction: Direction;
  score: number;
  highScore: number;
  gameOver: boolean;
  isPaused: boolean;
}

const GRID_WIDTH = 20;
const GRID_HEIGHT = 15;
const INITIAL_SPEED = 150; // ms
const SPEED_INCREASE = 5; // ms decrease per food eaten

function getRandomPosition(snake: Position[]): Position {
  let pos: Position;
  do {
    pos = {
      x: Math.floor(Math.random() * GRID_WIDTH),
      y: Math.floor(Math.random() * GRID_HEIGHT),
    };
  } while (snake.some((s) => s.x === pos.x && s.y === pos.y));
  return pos;
}

function getInitialState(): SnakeGameState {
  const initialSnake = [
    { x: 10, y: 7 },
    { x: 9, y: 7 },
    { x: 8, y: 7 },
  ];
  return {
    snake: initialSnake,
    food: getRandomPosition(initialSnake),
    direction: "RIGHT",
    score: 0,
    highScore: 0,
    gameOver: false,
    isPaused: false,
  };
}

export function useSnakeGame(onExit: () => void) {
  const [state, setState] = useState<SnakeGameState>(() => {
    const initial = getInitialState();
    // Load high score from localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("snake-high-score");
      if (saved) {
        initial.highScore = parseInt(saved, 10);
      }
    }
    return initial;
  });

  const directionRef = useRef<Direction>(state.direction);
  const lastMoveDirectionRef = useRef<Direction>(state.direction); // 실제 이동한 방향
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate speed based on score
  const getSpeed = useCallback((score: number) => {
    return Math.max(50, INITIAL_SPEED - score * SPEED_INCREASE);
  }, []);

  // Move snake
  const moveSnake = useCallback(() => {
    setState((prev) => {
      if (prev.gameOver || prev.isPaused) return prev;

      const head = prev.snake[0];
      const direction = directionRef.current;

      // 실제 이동 방향 업데이트
      lastMoveDirectionRef.current = direction;

      let newHead: Position;

      switch (direction) {
        case "UP":
          newHead = { x: head.x, y: head.y - 1 };
          break;
        case "DOWN":
          newHead = { x: head.x, y: head.y + 1 };
          break;
        case "LEFT":
          newHead = { x: head.x - 1, y: head.y };
          break;
        case "RIGHT":
          newHead = { x: head.x + 1, y: head.y };
          break;
      }

      // Check wall collision
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_WIDTH ||
        newHead.y < 0 ||
        newHead.y >= GRID_HEIGHT
      ) {
        return { ...prev, gameOver: true };
      }

      // Check self collision
      if (prev.snake.some((s) => s.x === newHead.x && s.y === newHead.y)) {
        return { ...prev, gameOver: true };
      }

      // Check food collision
      const ateFood = newHead.x === prev.food.x && newHead.y === prev.food.y;
      const newSnake = [newHead, ...prev.snake];

      if (!ateFood) {
        newSnake.pop();
      }

      const newScore = ateFood ? prev.score + 1 : prev.score;
      const newHighScore = Math.max(newScore, prev.highScore);

      // Save high score
      if (newHighScore > prev.highScore && typeof window !== "undefined") {
        localStorage.setItem("snake-high-score", newHighScore.toString());
      }

      return {
        ...prev,
        snake: newSnake,
        food: ateFood ? getRandomPosition(newSnake) : prev.food,
        direction: directionRef.current,
        score: newScore,
        highScore: newHighScore,
      };
    });
  }, []);

  // Start game loop
  const startGameLoop = useCallback(() => {
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }
    gameLoopRef.current = setInterval(moveSnake, getSpeed(state.score));
  }, [moveSnake, getSpeed, state.score]);

  // Handle direction change
  const changeDirection = useCallback((newDirection: Direction) => {
    // 실제 마지막으로 이동한 방향을 기준으로 180도 회전 방지
    const lastMove = lastMoveDirectionRef.current;
    if (
      (lastMove === "UP" && newDirection === "DOWN") ||
      (lastMove === "DOWN" && newDirection === "UP") ||
      (lastMove === "LEFT" && newDirection === "RIGHT") ||
      (lastMove === "RIGHT" && newDirection === "LEFT")
    ) {
      return;
    }
    directionRef.current = newDirection;
  }, []);

  // Restart game
  const restart = useCallback(() => {
    const newState = getInitialState();
    newState.highScore = state.highScore;
    directionRef.current = "RIGHT";
    lastMoveDirectionRef.current = "RIGHT";
    setState(newState);
  }, [state.highScore]);

  // Toggle pause
  const togglePause = useCallback(() => {
    setState((prev) => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          e.preventDefault();
          changeDirection("UP");
          break;
        case "ArrowDown":
        case "s":
        case "S":
          e.preventDefault();
          changeDirection("DOWN");
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          e.preventDefault();
          changeDirection("LEFT");
          break;
        case "ArrowRight":
        case "d":
        case "D":
          e.preventDefault();
          changeDirection("RIGHT");
          break;
        case "Escape":
          e.preventDefault();
          onExit();
          break;
        case " ":
          e.preventDefault();
          if (state.gameOver) {
            restart();
          } else {
            togglePause();
          }
          break;
        case "r":
        case "R":
          e.preventDefault();
          restart();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeDirection, onExit, restart, togglePause, state.gameOver]);

  // Game loop management
  useEffect(() => {
    if (!state.gameOver && !state.isPaused) {
      startGameLoop();
    }
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [state.gameOver, state.isPaused, startGameLoop]);

  return {
    ...state,
    gridWidth: GRID_WIDTH,
    gridHeight: GRID_HEIGHT,
    restart,
    togglePause,
    changeDirection,
  };
}
