import type { CSSProperties } from "react";
import { ArrowDown, ChevronRight } from "@/components/icons";
import { profile } from "@/data/site";

// Where each letter of "break" starts before it snaps back into line.
const SCATTER = [
  { dx: "-0.05em", dy: "-0.2em", r: "-9deg" },
  { dx: "0.03em", dy: "0.16em", r: "7deg" },
  { dx: "-0.02em", dy: "-0.12em", r: "-5deg" },
  { dx: "0.06em", dy: "0.22em", r: "11deg" },
  { dx: "0.04em", dy: "-0.17em", r: "-6deg" },
];

function BrokenWord() {
  return (
    <span className="whitespace-nowrap">
      <span className="sr-only">break</span>
      <span aria-hidden="true">
        {SCATTER.map((offset, index) => (
          <span
            key={index}
            className="break-letter"
            style={{ "--dx": offset.dx, "--dy": offset.dy, "--r": offset.r, "--i": index } as CSSProperties}
          >
            {"break"[index]}
          </span>
        ))}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-canvas">
      <div className="mx-auto max-w-[1120px] px-6 pb-20 pt-16 text-center sm:pb-28 sm:pt-24">
        <h1
          id="hero-title"
          className="mx-auto max-w-[16ch] text-[clamp(3rem,9.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink"
        >
          I <BrokenWord /> my own systems on purpose.
        </h1>

        <p className="mx-auto mt-8 max-w-[34rem] text-[clamp(1.1875rem,2.3vw,1.5rem)] leading-[1.4] tracking-[-0.01em] text-ink-muted">
          Then I measure what held. I’m <span className="font-semibold text-ink">{profile.name}</span>, and I build
          distributed systems, Kubernetes platforms and AI agent runtimes.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-action px-6 py-3 text-[1.0625rem] font-medium text-white transition-[background-color,transform] duration-150 ease-out hover:bg-action-hover active:scale-[0.97]"
          >
            See the work
            <ArrowDown className="size-4" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-[1.0625rem] text-link hover:underline"
          >
            View résumé
            <ChevronRight className="size-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </div>

        <p className="mx-auto mt-12 max-w-[40rem] text-[0.9375rem] leading-relaxed text-ink-muted">
          M.S. Computer Science, University of Dayton. Open to new-grad DevOps, Cloud, SRE and AI Engineering roles
          from January 2027.
        </p>
      </div>
    </section>
  );
}
