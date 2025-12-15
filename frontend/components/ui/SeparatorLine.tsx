interface SeparatorLineProps {
  variant?: "primary" | "secondary";
  length?: number;
}

export function SeparatorLine({ variant = "primary", length = 60 }: SeparatorLineProps) {
  const char = variant === "primary" ? "═" : "─";
  const colorClass = variant === "primary" ? "dos-yellow" : "dos-cyan";

  return (
    <div className={`${colorClass} overflow-hidden whitespace-nowrap ${variant === "secondary" ? "mt-4" : ""}`}>
      {char.repeat(length)}
    </div>
  );
}

export function Divider() {
  return <SeparatorLine variant="secondary" length={40} />;
}
