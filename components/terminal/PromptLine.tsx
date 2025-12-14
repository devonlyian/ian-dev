interface PromptLineProps {
  showCursor?: boolean;
}

export default function PromptLine({ showCursor = false }: PromptLineProps) {
  return (
    <span className="dos-highlight whitespace-nowrap">
      <span>C:\IAN-DEV&gt;</span>
      {showCursor && <span className="cursor-blink" />}
    </span>
  );
}
