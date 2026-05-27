import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support for OooBooGoo Inc. products - Rede.fm, SHAP Media services, and general inquiries.",
};

const faqSections = [
  {
    category: "General",
    items: [
      {
        q: "What is OooBooGoo Inc.?",
        a: "OooBooGoo Inc. is a technology and media company based in Thornhill, Ontario, Canada. We operate two main brands: SHAP Media Group (media consulting and production) and Rede.fm (a creator preparation and production platform currently in limited release).",
      },
      {
        q: "How do I get in touch?",
        a: "For general and business inquiries, email hello@ooboogoo.com. For product support, email support@ooboogoo.com. For press and media requests, email media@ooboogoo.com. We respond within one business day.",
      },
      {
        q: "Where is OooBooGoo Inc. based?",
        a: "OooBooGoo Inc. is incorporated and headquartered in Thornhill, Ontario, Canada. We work with clients and users globally.",
      },
    ],
  },
  {
    category: "Rede.fm",
    items: [
      {
        q: "What is Rede.fm?",
        a: "Rede.fm is a preparation and production platform for creators, podcasters, broadcasters, and live show hosts. It covers show planning, guest management, media kits, publishing workflows, and AI-assisted preparation - everything that happens before you go live.",
      },
      {
        q: "How do I get access to Rede.fm?",
        a: "Rede.fm is currently in limited release. You can request access via the Rede.fm page or by visiting rede.fm directly. We review access requests on a rolling basis and notify accepted users by email.",
      },
      {
        q: "I'm having trouble with my Rede.fm account - who do I contact?",
        a: "Email support@ooboogoo.com with a description of the issue and, if possible, your account email address. We aim to respond within one business day.",
      },
      {
        q: "Does Rede.fm work on iPhone and iPad?",
        a: "Rede.fm is designed with Apple ecosystem compatibility as a core requirement - including iOS and iPadOS. Access and availability details are provided to users after onboarding.",
      },
      {
        q: "How does Rede.fm handle my data?",
        a: "We take privacy seriously. Rede.fm collects only the data necessary to operate the platform. We do not sell or share creator data with third parties for commercial purposes. See our Privacy Policy for full details.",
      },
    ],
  },
  {
    category: "SHAP Media Group",
    items: [
      {
        q: "How do I engage SHAP Media Group for consulting?",
        a: "All SHAP Media engagements begin with a discovery conversation. Use the Contact page to send a message selecting 'SHAP Media consulting' as the inquiry type, or email hello@ooboogoo.com directly.",
      },
      {
        q: "What kinds of projects does SHAP Media take on?",
        a: "SHAP Media works on livestream consulting, creator coaching, podcast and broadcast development, social media systems, strategic communications, and content strategy. We work with independent creators, media organisations, and brands.",
      },
      {
        q: "Do you work with clients outside Canada?",
        a: "Yes. While we are based in Ontario, we work with clients globally. Engagements are typically conducted remotely.",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <section aria-labelledby="support-heading" className="hero">
        <p className="hero-eyebrow">Support</p>
        <h1 id="support-heading" className="hero-title">
          How can we help?
        </h1>
        <p className="hero-body">
          Find answers to common questions below, or reach out directly -          we respond within one business day.
        </p>
        <div className="hero-actions">
          <a href="mailto:support@ooboogoo.com" className="btn btn-primary">Email Support</a>
          <Link href="/contact" className="btn btn-ghost">Contact page</Link>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="contact-options-heading" className="section">
        <p className="section-eyebrow">Contact Options</p>
        <h2 id="contact-options-heading" className="section-title">Reach the right team.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginTop: 36 }}>
          {[
            { label: "Product Support", email: "support@ooboogoo.com", desc: "Rede.fm account issues, technical problems, feature questions." },
            { label: "Business Inquiries", email: "hello@ooboogoo.com", desc: "Consulting engagements, partnerships, commercial proposals." },
            { label: "Press & Media", email: "media@ooboogoo.com", desc: "Interviews, press coverage, company information requests." },
          ].map(({ label, email, desc }) => (
            <div key={label} style={{ padding: "24px", border: "1px solid var(--color-border)", borderRadius: 12, background: "var(--color-surface)" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 8 }}>{label}</p>
              <a href={`mailto:${email}`} style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", display: "block", marginBottom: 8, letterSpacing: "-0.02em" }}>{email}</a>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="faq-heading" className="section">
        <p className="section-eyebrow">FAQ</p>
        <h2 id="faq-heading" className="section-title">Common questions.</h2>
        {faqSections.map(({ category, items }) => (
          <div key={category} style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: 0 }}>
              {category}
            </h3>
            <div className="faq-list">
              {items.map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
