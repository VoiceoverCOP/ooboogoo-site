import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The philosophy behind OooBooGoo Inc. — why the name, the company, and the approach all exist.",
};

const values = [
  {
    num: "01",
    title: "Systems thinking first",
    body: "Every product and service we build starts with understanding the system around the problem — not just the symptom.",
  },
  {
    num: "02",
    title: "Creator-centred design",
    body: "We build for the people doing the creative work. Their time, attention, and context are the resources we protect.",
  },
  {
    num: "03",
    title: "Media and technology as one discipline",
    body: "The best work happens at the intersection. We don't treat media strategy and software engineering as separate concerns.",
  },
  {
    num: "04",
    title: "Privacy by default",
    body: "We collect the minimum necessary to operate. Creator data is never sold, profiled, or shared with third parties for commercial gain.",
  },
  {
    num: "05",
    title: "Operational honesty",
    body: "No vaporware. No \"coming soon\" theatre. Products ship when they're ready — and we describe them accurately until they do.",
  },
  {
    num: "06",
    title: "Long-term over growth metrics",
    body: "We are an independent, self-funded operation. That means we optimise for quality and longevity, not for round-trip investor cycles.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="hero">
        <p className="hero-eyebrow">About OooBooGoo</p>
        <h1 id="about-heading" className="hero-title">
          A name invented on purpose.
        </h1>
        <p className="hero-body">
          The name OooBooGoo was created deliberately — with no prior
          definition, no existing brand baggage, and no inherited
          expectations. That blank canvas is the point.
        </p>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="philosophy-heading" className="section">
        <p className="section-eyebrow">Philosophy</p>
        <h2 id="philosophy-heading" className="section-title">
          Why we exist.
        </h2>
        <div style={{ maxWidth: 720 }}>
          <blockquote className="pull-quote" style={{ marginBottom: 32 }}>
            <p className="pull-quote-text">
              &ldquo;OooBooGoo exists because we believe there are problems no one
              else is thinking about solving.&rdquo;
            </p>
          </blockquote>
          <p className="section-body">
            Creativity, ingenuity, and a strange desire to fix what&apos;s broken
            drive everything we build. We operate at the crossover between
            media and technology — where operational depth meets software
            thinking — because that&apos;s where the most interesting, most
            overlooked problems live.
          </p>
          <p className="section-body" style={{ marginTop: 16 }}>
            We don&apos;t fit neatly into existing categories, and that&apos;s
            deliberate. The work we do spans media consulting, creator
            infrastructure, software development, and experimental products.
            The thread connecting all of it is systems thinking: understanding
            how things actually work, and then making them work better.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="structure-heading" className="section">
        <p className="section-eyebrow">Operating Structure</p>
        <h2 id="structure-heading" className="section-title">
          How we&apos;re organised.
        </h2>
        <p className="section-body">
          OooBooGoo Inc. is the incorporated umbrella entity. Two operating
          brands work under it:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 36 }}>
          {[
            {
              name: "SHAP Media Group",
              role: "Primary operational entity",
              desc: "The media consulting, production, and strategic communications arm. This is where the company generates revenue through direct client engagements — livestream consulting, creator coaching, podcast development, and content strategy.",
              href: "/shap-media",
            },
            {
              name: "Rede.fm",
              role: "Flagship software product",
              desc: "The creator preparation and production platform, currently in limited release. Rede.fm is the long-term software product — a SaaS system for creators, broadcasters, podcasters, and live show producers.",
              href: "/rede-fm",
            },
          ].map(({ name, role, desc, href }) => (
            <div
              key={name}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: 14,
                padding: "32px",
                background: "var(--color-surface)",
              }}
            >
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 8 }}>{role}</p>
              <h3 style={{ fontSize: "1.25rem", color: "var(--color-text)", marginBottom: 12, fontWeight: 800, letterSpacing: "-0.03em" }}>{name}</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
              <a href={href} style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-accent)" }}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="values-heading" className="section">
        <p className="section-eyebrow">How We Work</p>
        <h2 id="values-heading" className="section-title">Principles.</h2>
        <div className="values-grid">
          {values.map(({ num, title, body }) => (
            <div key={num} className="value-item">
              <p className="value-num">{num}</p>
              <h3>{title}</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="company-details-heading" className="section">
        <p className="section-eyebrow">Company Information</p>
        <h2 id="company-details-heading" className="section-title">Legal details.</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 8 }}>
          {[
            ["Legal name", "OooBooGoo Inc."],
            ["Business type", "Technology & Media Company — Software Development, Media Consulting, Creator Infrastructure"],
            ["Registered address", "7805 Bayview Avenue, Suite 217, Thornhill, Ontario L3T 7N1, Canada"],
            ["General inquiries", "sales@ooboogoo.com"],
          ].map(([label, value]) => (
            <div key={label} className="contact-info-item">
              <p className="contact-info-label">{label}</p>
              <p className="contact-info-value">
                {label === "General inquiries" ? (
                  <a href={`mailto:${value}`} style={{ color: "var(--color-accent)" }}>{value}</a>
                ) : value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
