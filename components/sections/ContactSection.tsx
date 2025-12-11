import { contacts } from "@/data/contacts";

export default function ContactSection() {
  return (
    <div className="space-y-3">
      <div className="dos-yellow font-bold">CONTACT</div>
      <div className="dos-yellow">{"=".repeat(30)}</div>

      <div className="space-y-2 mt-3">
        {contacts.map((contact) => (
          <div key={contact.type} className="flex flex-col sm:flex-row sm:gap-2">
            <span className="dos-cyan sm:w-20 shrink-0">{contact.label}</span>
            {contact.url ? (
              <a
                href={contact.url}
                target={contact.type !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="dos-highlight hover:underline"
              >
                {contact.value}
              </a>
            ) : (
              <span className="dos-highlight">{contact.value}</span>
            )}
          </div>
        ))}
      </div>

      <div className="dos-yellow mt-3">{"=".repeat(30)}</div>
      <div className="mt-2 dos-text text-sm">
        Feel free to reach out!
      </div>
    </div>
  );
}
