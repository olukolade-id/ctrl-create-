"use client";

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (formspreeEndpoint) return;

    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const body = encodeURIComponent(`Hello Idowu, my name is ${name}. My email is ${email}.\n\n${message}`);
    window.location.href = `https://wa.me/2348123342817?text=${body}`;
  }

  return (
    <form
      className="contact-form"
      action={formspreeEndpoint || undefined}
      method="POST"
      onSubmit={handleSubmit}
    >
      <label>
        <span>Name</span>
        <input name="name" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required />
      </label>
      <label>
        <span>What are you making?</span>
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit">Send enquiry <span>↗</span></button>
    </form>
  );
}