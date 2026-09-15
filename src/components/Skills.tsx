import { skills } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="on-night bg-night text-night-ink">
      <div className="mx-auto max-w-[1120px] px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h2
            id="skills-title"
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
          >
            The toolbox.
          </h2>
          <p className="mt-5 text-[1.1875rem] leading-relaxed text-night-muted">
            Everything here shows up in the work on this page.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.name} className="border-t border-white/15 pt-6">
              <h3 className="text-[1.0625rem] font-semibold">{group.name}</h3>
              <p className="mt-2 leading-relaxed text-night-muted">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
