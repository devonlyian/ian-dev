import { profile } from "@/data/profile";
import { neofetchArt } from "@/lib/commands/ascii";

export default function NeofetchSection() {
  const info = [
    { label: "OS", value: "Portfolio OS 1.0" },
    { label: "Host", value: profile.name },
    { label: "Kernel", value: "Next.js 15" },
    { label: "Uptime", value: "6+ yrs" },
    { label: "Shell", value: "MS-DOS" },
    { label: "DE", value: "React 19" },
    { label: "CPU", value: "Kotlin/Spring" },
    { label: "Loc", value: "Seoul, KR" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <pre className="dos-cyan text-xs leading-tight hidden sm:block overflow-x-auto">
        {neofetchArt}
      </pre>
      <div className="space-y-0.5 text-sm">
        <div className="dos-highlight font-bold">
          {profile.name.toLowerCase().replace(" ", "")}@portfolio
        </div>
        <div className="dos-highlight">─────────────────</div>
        {info.map((item) => (
          <div key={item.label}>
            <span className="dos-cyan">{item.label}: </span>
            <span className="dos-text">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
