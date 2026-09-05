import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getNextProject, getProjectBySlug, projects } from "@/lib/projects";
import { getProjectMedia } from "@/lib/project-media";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — CTRL + CREATE`,
    description: project.fullDescription,
    openGraph: {
      title: `${project.title} — CTRL + CREATE`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const discoveredMedia = await getProjectMedia(slug);
  const media = { ...discoveredMedia, ...project.media };
  const next = getNextProject(slug);
  return (
    <main className="case-study">
      <header className="case-header">
        <a className="wordmark" href="/">
          CTRL <span>+</span> CREATE
        </a>
        <a className="case-back" href="/">
          ← Back to work
        </a>
      </header>
      <section className="case-hero">
        <span className="section-index">
          ({project.id.padStart(2, "0")}) / CASE STUDY
        </span>
        <h1>{project.title}</h1>
        <p>{project.shortDescription}</p>
        <div className="case-meta">
          <span>{project.type}</span>
          <span>{project.year}</span>
          <span>{project.disciplines.join(" / ")}</span>
        </div>
      </section>
      <div className={`case-image case-visual ${project.className}`} role="img" aria-label={`${project.title} case study visual`}>
        {project.heroVideo || media.motion ? (
          <video autoPlay muted loop playsInline poster={media.hero} style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src={project.heroVideo || media.motion} type="video/mp4" />
          </video>
        ) : media.hero ? (
          <Image src={media.hero} alt={`${project.title} case study hero`} fill priority sizes="100vw" />
        ) : (
          <div className="art-object" />
        )}
      </div>
      <section className="case-content">
        <div>
          <span className="section-index">THE BRIEF</span>
          <p>{project.challenge}</p>
        </div>
        <div>
          <span className="section-index">THE APPROACH</span>
          <p>{project.solution}</p>
        </div>
      </section>
      <div className="case-details">
        {(project.media?.details ?? [undefined, undefined]).map((image, index) => (
          <div
            className={`case-image case-image--detail case-visual ${project.className}`}
            role="img"
            aria-label={`${project.title} detail ${index + 1}`}
            key={`${project.slug}-detail-${index}`}
          >
            {image ? (
              <Image src={image} alt={`${project.title} detail ${index + 1}`} fill sizes="(max-width: 700px) 90vw, 45vw" />
            ) : (
              <div className="art-object" />
            )}
          </div>
        ))}
      </div>
      <section className="case-results">
        <span className="section-index">OUTCOMES</span>
        <ul>
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
        <div className="case-tools">
          <span>TOOLS</span>
          <span>{project.tools.join(" / ")}</span>
        </div>
      </section>
      {next && (
        <a className="next-project" href={`/work/${next.slug}`}>
          <span>Next project</span>
          <strong>{next.title} ↗</strong>
        </a>
      )}
      <footer className="site-footer">
        <span>© CTRL + CREATE 2026</span>
        <div>
          <a href="mailto:idowuolukolade@gmail.com">idowuolukolade@gmail.com</a>
          <a href="https://wa.me/2348123342817" target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
      </footer>
    </main>
  );
}
