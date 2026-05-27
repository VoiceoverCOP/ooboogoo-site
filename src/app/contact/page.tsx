import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OooBooGoo Inc. — support, press, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-heading" className="hero">
        <p className="hero-eyebrow">Contact</p>
        <h1 id="contact-heading" className="hero-title">
          We read every message.
        </h1>
        <p className="hero-body">
          Whether it&apos;s a support question, a feature request, or a press
          inquiry — reach out and we&apos;ll get back to you within one business
          day.
        </p>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="contact-details-heading" className="section">
        <h2 id="contact-details-heading" className="section-title">
          Contact details.
        </h2>
        <div className="contact-grid">
          <div>
            <div className="contact-info-item">
              <p className="contact-info-label">General &amp; Support</p>
              <p className="contact-info-value">
                <a href="mailto:hello@ooboogoo.com" style={{ color: "var(--color-accent)" }}>
                  hello@ooboogoo.com
                </a>
              </p>
            </div>
            <div className="contact-info-item">
              <p className="contact-info-label">Press &amp; Media</p>
              <p className="contact-info-value">
                <a href="mailto:press@ooboogoo.com" style={{ color: "var(--color-accent)" }}>
                  press@ooboogoo.com
                </a>
              </p>
            </div>
            <div className="contact-info-item">
              <p className="contact-info-label">Mailing Address</p>
              <p className="contact-info-value" style={{ lineHeight: 1.8 }}>
                OooBooGoo Inc.<br />
                548 Market St, PMB 12345<br />
                San Francisco, CA 94104<br />
                United States
              </p>
            </div>
            <div className="contact-info-item">
              <p className="contact-info-label">Response time</p>
              <p className="contact-info-value">Within 1 business day</p>
            </div>
          </div>

          <form
            action="mailto:hello@ooboogoo.com"
            method="get"
            encType="text/plain"
            aria-label="Contact form"
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@example.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Support request / general question"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="body"
                required
                placeholder="Tell us what's on your mind…"
                className="form-textarea"
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
