import type { ResumeDocument } from "@/lib/resume/types";

export function ResumeDocumentView({ resume }: { resume: ResumeDocument }) {
  return (
    <main className="resume-page">
      <nav className="resume-language-switch" aria-label="Resume language">
        <a href="/resume?lang=ko" aria-current={resume.language === "ko" ? "page" : undefined}>
          KO
        </a>
        <a href="/resume?lang=en" aria-current={resume.language === "en" ? "page" : undefined}>
          EN
        </a>
      </nav>
      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">{resume.labels.role}</p>
            <h1>{resume.name}</h1>
            <p className="resume-role">{resume.role}</p>
          </div>
          <ul className="resume-contact" aria-label={resume.labels.contact}>
            {resume.contact.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                {item.href ? <a href={item.href}>{item.value}</a> : <strong>{item.value}</strong>}
              </li>
            ))}
          </ul>
        </header>

        <section className="resume-section">
          <h2>{resume.labels.summary}</h2>
          <ul>
            {resume.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2>{resume.labels.skills}</h2>
          <div className="resume-skills">
            {resume.skills.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>{resume.labels.experience}</h2>
          <div className="resume-list">
            {resume.experiences.map((experience) => (
              <section key={`${experience.period}-${experience.company}`} className="resume-entry">
                <div className="resume-entry-meta">{experience.period}</div>
                <div>
                  <h3>
                    {experience.title} <span>{experience.company}</span>
                  </h3>
                  <p>{experience.summary}</p>
                  <p className="resume-stack">{experience.stack.join(", ")}</p>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>{resume.labels.projects}</h2>
          <div className="resume-list">
            {resume.projects.map((project) => (
              <section key={project.title} className="resume-entry">
                <div className="resume-entry-meta">{project.year}</div>
                <div>
                  <h3>
                    {project.title} <span>{project.category}</span>
                  </h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.highlights.slice(0, 4).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="resume-stack">{project.tags.join(", ")}</p>
                </div>
              </section>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
