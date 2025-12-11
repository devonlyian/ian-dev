export default function TerminalHeader() {
  return (
    <div className="flex items-center justify-between px-2 py-1 bg-[var(--dos-highlight)] text-[var(--dos-bg)] select-none">
      <div className="flex items-center gap-2">
        <span className="text-sm sm:text-base font-bold truncate">
          <span className="hidden sm:inline">MS-DOS Prompt - </span>PORTFOLIO
        </span>
      </div>
    </div>
  );
}
