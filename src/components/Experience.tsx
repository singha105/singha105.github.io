import { experience } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-canvas">
      <div className="mx-auto max-w-[1120px] px-6 py-24 sm:py-32">
        <h2
          id="experience-title"
          className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
        >
          Where I’ve worked.
        </h2>

        <ol className="mt-12 border-t border-hairline">
          {experience.map((job) => (
            <li key={job.org} className="grid gap-4 border-b border-hairline py-10 md:grid-cols-12 md:gap-8">
              <p className="text-[0.9375rem] tabular-nums text-ink-muted md:col-span-3 md:pt-2">{job.period}</p>
              <div className="md:col-span-9">
                <h3 className="text-[1.625rem] font-semibold leading-tight tracking-[-0.02em]">{job.role}</h3>
                <p className="mt-1 text-ink-muted">
                  {job.org}, {job.place}
                </p>
                <ul className="mt-5 max-w-[42rem] list-disc space-y-2 pl-5 leading-relaxed marker:text-ink-muted">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
