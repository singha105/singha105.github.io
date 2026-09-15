import { ChevronRight } from "@/components/icons";
import { profile } from "@/data/site";

const CONTACT_LINKS = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Résumé", href: profile.resume },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-canvas">
      <div className="mx-auto max-w-[1120px] px-6 py-28 text-center sm:py-40">
        <h2
          id="contact-title"
          className="mx-auto max-w-[16ch] text-[clamp(2.5rem,6.5vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.03em]"
        >
          Let’s build something that holds up.
        </h2>
        <p className="mx-auto mt-6 max-w-[34rem] text-[1.1875rem] leading-relaxed text-ink-muted">
          I’m looking for new-grad DevOps, Cloud, SRE and AI Engineering roles in the United States, starting January
          2027.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-action px-6 py-3 text-[1.0625rem] font-medium text-white transition-[background-color,transform] duration-150 ease-out hover:bg-action-hover active:scale-[0.97]"
          >
            Email me
          </a>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-[1.0625rem] text-link hover:underline"
            >
              {link.label}
              <ChevronRight className="size-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-[0.9375rem] text-ink-muted">
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-mist">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-6 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
        <a href="/waph.html" className="hover:underline">
          WAPH course project
        </a>
      </div>
    </footer>
  );
}
