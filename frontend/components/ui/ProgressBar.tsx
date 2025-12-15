interface ProgressBarProps {
  value: number; // 0-100
  width?: number; // character count
  filledChar?: string;
  emptyChar?: string;
}

export default function ProgressBar({
  value,
  width = 20,
  filledChar = "█",
  emptyChar = "░",
}: ProgressBarProps) {
  const filled = Math.round((value / 100) * width);
  const empty = width - filled;

  return (
    <span className="font-mono whitespace-nowrap">
      <span className="dos-cyan">{filledChar.repeat(filled)}</span>
      <span className="dos-text opacity-50">{emptyChar.repeat(empty)}</span>
      <span className="dos-highlight ml-2">{value}%</span>
    </span>
  );
}
