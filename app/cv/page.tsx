import type { Metadata } from "next";
import { access } from "node:fs/promises";
import path from "node:path";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "CV — Idowu Olukolade Goodness",
  description: "CV and professional profile for Idowu Olukolade Goodness.",
};

export default async function CvPage() {
  let hasPdf = true;
  try {
    await access(path.join(process.cwd(), "public", "cv", "idowu-olukolade-goodness-cv.pdf"));
  } catch {
    hasPdf = false;
  }

  return (
    <main className="cv-page">
      <header className="case-header">
        <a className="wordmark" href="/">CTRL <span>+</span> CREATE</a>
        <a className="case-back" href="/">← Back home</a>
      </header>
      <section className="cv-intro">
        <span className="section-index">CV / PROFILE</span>
        <h1>Idowu Olukolade<br /><em>Goodness.</em></h1>
        <p>Graphic Designer, Motion Designer, Web Designer and Creative Director.</p>
        <div className="cv-actions">
          <PrintButton />
          {hasPdf && <a className="cv-download" href="/cv/idowu-olukolade-goodness-cv.pdf" download>Download PDF <span>↓</span></a>}
        </div>
      </section>
      <section className="cv-content">
        <div>
          <span className="section-index">PROFILE</span>
          <p>Bold ideas. Clean execution. Visuals that move. I create visual identities, digital experiences and motion-led work for people and teams building something meaningful.</p>
        </div>
        <div>
          <span className="section-index">CAPABILITIES</span>
          <ul>
            <li>Graphic design</li>
            <li>Brand identity</li>
            <li>Motion design</li>
            <li>Web design and development</li>
            <li>Creative direction</li>
          </ul>
        </div>
        <div>
          <span className="section-index">CONTACT</span>
          <p><a href="mailto:idowuolukolade@gmail.com">idowuolukolade@gmail.com</a><br /><a href="https://wa.me/2348123342817">WhatsApp</a><br />Nigeria / Worldwide</p>
        </div>
      </section>
    </main>
  );
}