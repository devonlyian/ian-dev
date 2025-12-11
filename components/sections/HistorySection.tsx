interface HistorySectionProps {
  commands: string[];
}

export default function HistorySection({ commands }: HistorySectionProps) {
  if (commands.length === 0) {
    return <div className="dos-text">No commands in history.</div>;
  }

  return (
    <div className="space-y-1">
      {commands.map((cmd, i) => (
        <div key={i} className="dos-text">
          {(i + 1).toString().padStart(3, " ")}  {cmd}
        </div>
      ))}
    </div>
  );
}
