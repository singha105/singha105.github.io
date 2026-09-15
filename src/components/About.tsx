import Image from "next/image";
import { education, extras } from "@/data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-mist">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-6 py-24 sm:py-32 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Image
            src="/headshot.webp"
            alt="Portrait of Arnab Singh"
            width={560}
            height={578}
            className="aspect-square w-full max-w-[280px] rounded-2xl object-cover object-top md:max-w-none"
          />
        </div>

        <div className="md:col-span-8">
          <h2
            id="about-title"
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
          >
            Claims have to survive evidence.
          </h2>
          <div className="mt-8 max-w-[40rem] space-y-5 text-[1.1875rem] leading-relaxed text-ink-muted">
            <p>
              I’m a Master’s student in Computer Science at the University of Dayton, graduating in December 2026.
              Most of my time goes to the part of software that only shows up under load: delivery guarantees,
              retries, failure recovery, and the infrastructure underneath them.
            </p>
            <p>
              When I built a webhook delivery service, I didn’t stop at “it has at-least-once delivery.” I turned the
              deduplication guard off, killed the workers mid-flight and counted the duplicates. There were ten. I
              turned it back on, counted again, and wrote the caveat down next to the number.
            </p>
          </div>

          <h3 className="mt-14 text-[1.375rem] font-semibold tracking-[-0.02em]">Education</h3>
          <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
            {education.map((item) => (
              <li key={item.degree} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-6">
                <div>
                  <p className="font-semibold">{item.degree}</p>
                  <p className="text-ink-muted">
                    {item.school} · {item.result}
                  </p>
                </div>
                <p className="text-[0.9375rem] tabular-nums text-ink-muted">{item.period}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-1.5 text-[0.9375rem] text-ink-muted">
            {extras.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
