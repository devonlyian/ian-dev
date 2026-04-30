"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function SmoothCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const morphCursor = (vars: gsap.TweenVars) => {
      gsap.to(cursor, {
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
        ...vars,
      });
    };

    let cursorState: "normal" | "hover" | "press" = "normal";
    let isPressed = false;

    const isInteractiveTarget = (target: EventTarget | null) =>
      Boolean((target as Element | null)?.closest("[data-cursor='link'], a, button"));

    const setCursorState = (nextState: typeof cursorState) => {
      if (cursorState === nextState) {
        return;
      }

      cursorState = nextState;

      if (nextState === "hover") {
        activateCursor();
        return;
      }

      if (nextState === "press") {
        pressCursor();
        return;
      }

      resetCursor();
    };

    const resetCursor = () => {
      morphCursor({
        backgroundColor: "var(--foreground)",
        opacity: 0.42,
        scale: 1,
      });
    };

    const activateCursor = () => {
      morphCursor({
        backgroundColor: "var(--brand)",
        opacity: 0.58,
        scale: 1.65,
      });
    };

    const pressCursor = () => {
      morphCursor({
        backgroundColor: "var(--brand)",
        opacity: 0.74,
        scale: 1.35,
      });
    };

    gsap.set(cursor, {
      backgroundColor: "var(--foreground)",
      opacity: 0.42,
      scale: 1,
    });

    const move = (event: PointerEvent) => {
      gsap.set(cursor, {
        x: event.clientX - 9,
        y: event.clientY - 9,
      });

      if (!isPressed) {
        setCursorState(isInteractiveTarget(event.target) ? "hover" : "normal");
      }
    };

    const down = (event: PointerEvent) => {
      if (isInteractiveTarget(event.target)) {
        isPressed = true;
        setCursorState("press");
      }
    };

    const up = (event: PointerEvent) => {
      isPressed = false;
      setCursorState(isInteractiveTarget(event.target) ? "hover" : "normal");
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerdown", down);
    document.addEventListener("pointerup", up);
    document.addEventListener("pointerleave", resetCursor);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("pointerup", up);
      document.removeEventListener("pointerleave", resetCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[18px] w-[18px] rounded-full bg-[color:var(--foreground)] opacity-40 shadow-[0_0_18px_rgba(207,135,0,0.28)] md:block"
      aria-hidden="true"
    />
  );
}
