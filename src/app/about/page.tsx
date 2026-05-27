import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OooBooGoo Inc. — an independent software company building focused, high-quality apps for macOS and iOS.",
};

const values = [
  {
    num: "01",
    title: "Focused by design",
    body: "Every product we ship does one thing well. Scope creep is the enemy of clarity.",
  },
  {
    num: "02",
    title: "Native first",
    body: "We build with the platform's grain — SwiftUI, AppKit, and Apple's own APIs — so our apps feel at home.",
  },
  {
    num: "03",
    title: "Privacy by default",
    body: "We collect only what is needed to operate. User data is never sold or shared with third parties.",
  },
  {
    num: "04",
    title: "Sustainable pace",
    body: "We are fully independent. No outside funding means we optimize for quality and longevity, not growth metrics.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="hero">
        <p className="hero-eyebrow">About Us</p>
        <h1 id="about-heading" className="hero-title">
          Independent software, done right.
        </h1>
        <p className="hero-body">
          OooBooGoo Inc. is a privately held software company incorporated in
          the State of California. We design, develop, and distribute apps for
          Apple&apos;s macOS and iOS platforms.
        </p>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="mission-heading" className="section">
        <p className="section-eyebrow">Mission</p>
        <h2 id="mission-heading" className="section-title">
          Why we build what we build.
        </h2>
        <p className="section-body">
          Most software is designed to maximise engagement. Ours is designed to
          get out of your way. We believe the best app is one you barely think
          about — it&apos;s just there when you need it, and invisible when you
          don&apos;t.
        </p>
        <p className="section-body" style={{ marginTop: 16 }}>
          Since our founding, we have shipped apps used by tens of thousands of
          people across 60+ countries. Every update is driven by real user
          feedback, not roadmap theatre.
        </p>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="values-heading" className="section">
        <p className="section-eyebrow">Values</p>
        <h2 id="values-heading" className="section-title">
          How we work.
        </h2>
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
        <p className="section-eyebrow">Company Details</p>
        <h2 id="company-details-heading" className="section-title">
          Legal information.
        </h2>
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="contact-info-item">
            <p className="contact-info-label">Legal name</p>
            <p className="contact-info-value">OooBooGoo Inc.</p>
          </div>
          <div className="contact-info-item">
            <p className="contact-info-label">Incorporation</p>
            <p className="contact-info-value">State of California, United States</p>
          </div>
          <div className="contact-info-item">
            <p className="contact-info-label">Business type</p>
            <p className="contact-info-value">Software Development &amp; Distribution</p>
          </div>
          <div className="contact-info-item">
            <p className="contact-info-label">Headquarters</p>
            <p className="contact-info-value">San Francisco, CA 94102, USA</p>
          </div>
          <div className="contact-info-item">
            <p className="contact-info-label">General inquiries</p>
            <p className="contact-info-value">
              <a href="mailto:hello@ooboogoo.com" style={{ color: "var(--color-accent)" }}>
                hello@ooboogoo.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
