import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OooBooGoo Inc. - business inquiries, partnerships, media, and support.",
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
          Whether it&apos;s a business inquiry, a consulting engagement, a
          partnership proposal, or a product question - reach out and
          we&apos;ll respond within one business day.
        </p>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="contact-details-heading" className="section">
        <h2 id="contact-details-heading" className="section-title">Contact details.</h2>
        <div className="contact-grid">
          <div>
            {[
              {
                label: "General & Business Inquiries",
                value: "hello@ooboogoo.com",
                href: "mailto:hello@ooboogoo.com",
              },
              {
                label: "Product Support (Rede.fm)",
                value: "support@ooboogoo.com",
                href: "mailto:support@ooboogoo.com",
              },
              {
                label: "Press & Media",
                value: "media@ooboogoo.com",
                href: "mailto:media@ooboogoo.com",
              },
              {
                label: "Partnerships",
                value: "hello@ooboogoo.com",
                href: "mailto:hello@ooboogoo.com",
              },
            ].map(({ label, value, href }) => (
              <div key={label} className="contact-info-item">
                <p className="contact-info-label">{label}</p>
                <p className="contact-info-value">
                  <a href={href} style={{ color: "var(--color-accent)" }}>{value}</a>
                </p>
              </div>
            ))}
            <div className="contact-info-item">
              <p className="contact-info-label">Mailing Address</p>
              <p className="contact-info-value" style={{ lineHeight: 1.8 }}>
                OooBooGoo Inc.<br />
                7805 Bayview Avenue, Suite 217<br />
                Thornhill, Ontario L3T 7N1<br />
                Canada
              </p>
            </div>
            <div className="contact-info-item">
              <p className="contact-info-label">Response Time</p>
              <p className="contact-info-value">Within 1 business day</p>
            </div>
          </div>

          <form action="mailto:hello@ooboogoo.com" method="get" encType="text/plain" aria-label="Contact form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="inquiry" className="form-label">Inquiry type</label>
              <select id="inquiry" name="subject" className="form-select">
                <option>Business inquiry</option>
                <option>SHAP Media consulting</option>
                <option>Rede.fm - product question</option>
                <option>Partnership proposal</option>
                <option>Press / media request</option>
                <option>General question</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="body" required placeholder="Tell us about your situation…" className="form-textarea" />
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
