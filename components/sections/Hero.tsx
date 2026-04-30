"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolio } from "@/lib/portfolio-data";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLElement>(null);
  const { text } = useLanguage();

  useGSAP(
    () => {
      gsap.from(".hero-word", {
        yPercent: 105,
        opacity: 0,
        duration: 0.85,
        stagger: 0.035,
        ease: "power4.out",
        delay: 0.28,
      });
      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.55,
      });
    },
    { scope: container },
  );

  return (
    <section
      id="hero"
      ref={container}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-background px-6 pb-8 pt-24 md:px-12 md:pb-4 md:pt-[7.55rem] lg:px-[5.4rem]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[34vh] min-h-64 w-[150vw] -translate-x-1/2 overflow-hidden opacity-75 [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_78%,transparent_100%)] md:top-[23%] md:h-[39vh]">
        <Image
          src="/hero-hands.png"
          alt=""
          fill
          priority
          sizes="150vw"
          className="object-cover blur-[6px] saturate-125"
          aria-hidden="true"
        />
      </div>

      <div className="relative flex flex-1 items-center">
        <div className="w-full translate-y-8 overflow-hidden py-8 md:translate-y-8 md:py-0">
          {[0, 1, 2].map((line) => (
            <div key={line} className="overflow-hidden">
              <p
                className={`hero-name hero-word whitespace-nowrap uppercase ${
                  line === 1 ? "hero-name-outline" : "text-foreground"
                }`}
              >
                {portfolio.hero.intro}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid gap-10 md:grid-cols-2 md:items-end md:pb-2">
        <div className="hero-fade">
          <p className="mb-16 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {portfolio.hero.kicker}
          </p>
          <h1 className="hero-subline max-w-[12ch] text-foreground">{portfolio.hero.headline}</h1>
          <div className="mt-14 hidden items-center gap-4 text-[11px] font-black uppercase tracking-[0.32em] text-muted-foreground md:flex">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
            Scroll
          </div>
        </div>

        <div className="hero-fade md:pb-4">
          <p className="max-w-xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            {text.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-black text-background transition-transform hover:-translate-y-0.5 md:px-6"
            data-cursor="link"
          >
            {portfolio.hero.primaryCta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-border px-5 py-3 text-sm font-black text-foreground transition-colors hover:border-brand hover:text-brand md:px-6"
            data-cursor="link"
          >
            {portfolio.hero.secondaryCta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-[11px] font-black uppercase tracking-[0.28em] text-muted-foreground">
            <a href={`mailto:${portfolio.owner.email}`} className="hover:text-foreground" data-cursor="link">
              Email ↗
            </a>
            <a href={portfolio.owner.github} className="hover:text-foreground" data-cursor="link">
              GitHub ↗
            </a>
            <a href={portfolio.owner.linkedin} className="hover:text-foreground" data-cursor="link">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
