"use client";

interface PrintButtonProps {
  onClick: () => void;
}

export default function PrintButton({ onClick }: PrintButtonProps) {
  return (
    <button onClick={onClick} className="nav-button text-sm" aria-label="Print resume">
      ⎙ PRINT
    </button>
  );
}
