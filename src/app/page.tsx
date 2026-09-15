import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FeatureTile } from "@/components/FeatureTile";
import { Hero } from "@/components/Hero";
import { MoreWork } from "@/components/MoreWork";
import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import { featuredProjects, profile } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://singha105.github.io",
  description: "M.S. Computer Science student building distributed systems, Kubernetes platforms and AI agent runtimes.",
  address: { "@type": "PostalAddress", addressLocality: "Dayton", addressRegion: "OH", addressCountry: "US" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Dayton" },
    { "@type": "CollegeOrUniversity", name: "Netaji Subhas University of Technology" },
  ],
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-2 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to work
      </a>
      <Nav />
      <main id="top">
        <Hero />
        <div id="work">
          {featuredProjects.map((project) => (
            <FeatureTile key={project.slug} project={project} />
          ))}
        </div>
        <MoreWork />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
