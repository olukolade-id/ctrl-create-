import type { Metadata } from "next";
import { ArchiveGallery } from "@/components/archive-gallery";

export const metadata: Metadata = {
  title: "Visual Archive — CTRL + CREATE",
  description: "Posters, flyers, interface studies and visual experiments by Idowu Olukolade Goodness.",
};

export default function ArchivePage() {
  return (
    <main className="archive-page">
      <header className="case-header">
        <a className="wordmark" href="/">CTRL <span>+</span> CREATE</a>
        <a className="case-back" href="/">← Back home</a>
      </header>
      <section className="archive-page__intro">
        <span className="section-index">(04) / VISUAL ARCHIVE</span>
        <h1>Loose work.<br /><em>Good energy.</em></h1>
        <p>Flyers, posters, interface studies and motion frames. This archive updates from the files in the project folders.</p>
      </section>
      <section className="archive-page__grid section-pad">
        <ArchiveGallery />
      </section>
    </main>
  );
}