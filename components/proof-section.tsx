import { collaborators, testimonials } from "@/lib/proof";

export function ProofSection() {
  if (!testimonials.length && !collaborators.length) return null;

  return (
    <section className="proof-section section-pad" aria-label="Client proof">
      {collaborators.length > 0 && (
        <div className="proof-logos">
          <span className="section-index">SELECTED COLLABORATORS</span>
          <div>
            {collaborators.map((collaborator) =>
              collaborator.url ? (
                <a href={collaborator.url} key={collaborator.name} target="_blank" rel="noreferrer">
                  {collaborator.name} ↗
                </a>
              ) : (
                <span key={collaborator.name}>{collaborator.name}</span>
              ),
            )}
          </div>
        </div>
      )}
      {testimonials.length > 0 && (
        <div className="proof-quotes">
          <span className="section-index">KIND WORDS</span>
          <div className="quote-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={`${testimonial.name}-${testimonial.quote}`}>
                <p>“{testimonial.quote}”</p>
                <cite>{testimonial.name} / {testimonial.role}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}