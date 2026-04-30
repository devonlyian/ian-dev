import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <div data-scroll-container>
      <main>
        <Hero />
        <div className="section-rule" aria-hidden="true" />
        <About />
        <div className="section-rule" aria-hidden="true" />
        <Projects />
        <div className="section-rule" aria-hidden="true" />
        <Experience />
        <div className="section-rule" aria-hidden="true" />
        <Services />
        <div className="section-rule" aria-hidden="true" />
        <Contact />
      </main>
    </div>
  );
}
