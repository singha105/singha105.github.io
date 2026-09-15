import Image from "next/image";
import { ChevronRight } from "@/components/icons";
import { earlierWork, moreProjects } from "@/data/site";

const SPAN = { 2: "md:col-span-2", 3: "md:col-span-3" } as const;

export function MoreWork() {
  return (
    <section id="more" aria-labelledby="more-title" className="bg-mist">
      <div className="mx-auto max-w-[1120px] px-6 py-24 sm:py-32">
        <h2
          id="more-title"
          className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
        >
          More things I’ve built.
        </h2>
        <p className="mt-5 max-w-[34rem] text-[1.1875rem] leading-relaxed text-ink-muted">
          Smaller projects, course work, and where I started.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-6">
          {moreProjects.map((project) => (
            <article
              key={project.href}
              className={`flex flex-col overflow-hidden rounded-2xl bg-canvas ${SPAN[project.span]}`}
            >
              {project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  className="aspect-[16/9] w-full object-cover object-top"
                />
              ) : null}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-[1.375rem] font-semibold leading-tight tracking-[-0.02em]">{project.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{project.description}</p>
                <p className="mt-4 text-sm text-ink-muted">
                  <span className="sr-only">Built with: </span>
                  {project.stack.join(" · ")}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-auto inline-flex items-center gap-1 self-start pt-6 text-link hover:underline"
                >
                  View on GitHub
                  <ChevronRight className="size-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}

          <article className="rounded-2xl bg-canvas p-7 md:col-span-4">
            <h3 className="text-[1.375rem] font-semibold leading-tight tracking-[-0.02em]">Earlier work</h3>
            <ul className="mt-3 divide-y divide-hairline">
              {earlierWork.map((item) => (
                <li key={item.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="shrink-0 text-sm tabular-nums text-ink-muted sm:w-10">{item.year}</span>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-0.5 text-[0.9375rem] leading-relaxed text-ink-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
