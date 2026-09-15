import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "@/components/icons";
import type { FeaturedProject, ProjectLink, Stat } from "@/data/site";

const THEMES = {
  night: {
    section: "on-night bg-night text-night-ink",
    muted: "text-night-muted",
    link: "text-sky",
    primary: "bg-night-ink text-night hover:bg-white",
    frame: "ring-1 ring-white/10",
    rule: "border-white/15",
  },
  mist: {
    section: "bg-mist text-ink",
    muted: "text-ink-muted",
    link: "text-link",
    primary: "bg-action text-white hover:bg-action-hover",
    frame: "shadow-[0_30px_60px_-24px_rgb(0_0_0/0.35)]",
    rule: "border-hairline",
  },
  canvas: {
    section: "bg-canvas text-ink",
    muted: "text-ink-muted",
    link: "text-link",
    primary: "bg-action text-white hover:bg-action-hover",
    frame: "shadow-[0_30px_60px_-24px_rgb(0_0_0/0.35)]",
    rule: "border-hairline",
  },
} as const;

type Theme = (typeof THEMES)[keyof typeof THEMES];

function ProjectLinks({ links, theme, centered }: { links: ProjectLink[]; theme: Theme; centered: boolean }) {
  return (
    <div className={`mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 ${centered ? "justify-center" : ""}`}>
      {links.map((link) =>
        link.kind === "primary" ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[0.9375rem] font-medium transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] ${theme.primary}`}
          >
            {link.label}
            <ArrowUpRight className="size-3.5" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-1 text-[1.0625rem] hover:underline ${theme.link}`}
          >
            {link.label}
            <ChevronRight className="size-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ),
      )}
    </div>
  );
}

function Stats({ stats, theme, centered }: { stats: Stat[]; theme: Theme; centered: boolean }) {
  return (
    <dl
      className={`grid grid-cols-1 gap-8 ${stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"} ${centered ? "text-center" : ""}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse gap-2">
          <dt className={`max-w-[18rem] text-[0.9375rem] leading-snug ${theme.muted} ${centered ? "mx-auto" : ""}`}>
            {stat.label}
          </dt>
          <dd
            className={`font-semibold leading-none tracking-[-0.03em] tabular-nums ${
              centered ? "text-[clamp(2.75rem,5vw,3.75rem)]" : "text-[clamp(2.5rem,4.5vw,3.25rem)]"
            }`}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Stack({ stack, theme }: { stack: string[]; theme: Theme }) {
  return (
    <p className={`text-sm leading-relaxed ${theme.muted}`}>
      <span className="sr-only">Built with: </span>
      {stack.join(" · ")}
    </p>
  );
}

function ProjectImage({ project, theme }: { project: FeaturedProject; theme: Theme }) {
  return (
    <Image
      src={project.image.src}
      alt={project.image.alt}
      width={project.image.width}
      height={project.image.height}
      className={`h-auto w-full rounded-2xl ${theme.frame}`}
    />
  );
}

export function FeatureTile({ project }: { project: FeaturedProject }) {
  const theme = THEMES[project.theme];
  const titleId = `${project.slug}-title`;

  if (project.layout === "stacked") {
    return (
      <section id={project.slug} aria-labelledby={titleId} className={`${theme.section} overflow-hidden`}>
        <div className="mx-auto max-w-[1120px] px-6 py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id={titleId}
              translate="no"
              className="text-[clamp(3rem,7.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
            >
              {project.name}
            </h2>
            <p className="mt-3 text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
              {project.tagline}
            </p>
            <p className={`mx-auto mt-6 max-w-[38rem] text-[1.1875rem] leading-relaxed ${theme.muted}`}>
              {project.description}
            </p>
            <ProjectLinks links={project.links} theme={theme} centered />
          </div>

          <figure className="rise-in mt-14 sm:mt-20">
            <ProjectImage project={project} theme={theme} />
          </figure>

          <div className="mx-auto mt-14 max-w-4xl sm:mt-20">
            <Stats stats={project.stats} theme={theme} centered />
            <div className="mt-12 text-center">
              <Stack stack={project.stack} theme={theme} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={project.slug} aria-labelledby={titleId} className={`${theme.section} overflow-hidden`}>
      <div className="mx-auto max-w-[1120px] px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-5 ${project.reverse ? "lg:order-2" : ""}`}>
            <h2
              id={titleId}
              translate="no"
              className="text-[clamp(2.75rem,5.5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
            >
              {project.name}
            </h2>
            <p className="mt-3 text-[clamp(1.5rem,2.6vw,1.875rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
              {project.tagline}
            </p>
            <p className={`mt-6 text-[1.1875rem] leading-relaxed ${theme.muted}`}>{project.description}</p>
            <ProjectLinks links={project.links} theme={theme} centered={false} />
          </div>

          <figure className={`rise-in lg:col-span-7 ${project.reverse ? "lg:order-1" : ""}`}>
            <ProjectImage project={project} theme={theme} />
          </figure>
        </div>

        <div className={`mt-16 border-t pt-10 sm:mt-20 ${theme.rule}`}>
          <Stats stats={project.stats} theme={theme} centered={false} />
          <div className="mt-10">
            <Stack stack={project.stack} theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
}
