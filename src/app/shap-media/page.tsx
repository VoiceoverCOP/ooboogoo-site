import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SHAP Media Group",
  description:
    "SHAP Media Group is the media consulting and production arm of OooBooGoo Inc. - strategic communications, livestream systems, creator coaching, and content strategy.",
};

const services = [
  {
    title: "Livestream Consulting",
    desc: "End-to-end production strategy for live broadcasts - from technical setup and platform selection to show structure and audience engagement systems.",
  },
  {
    title: "Creator Coaching",
    desc: "One-on-one and group coaching for creators building a sustainable media presence. Covers positioning, cadence, format, and growth strategy.",
  },
  {
    title: "Podcast & Broadcast Development",
    desc: "Concept development, format design, launch strategy, and ongoing production support for podcast and broadcast properties.",
  },
  {
    title: "Social Media Systems",
    desc: "Building repeatable, operationally sustainable social content systems - not one-off campaigns, but workflows that scale with a team.",
  },
  {
    title: "Strategic Communications",
    desc: "Messaging architecture, narrative development, and communications planning for organisations, brands, and individual voices.",
  },
  {
    title: "Content Strategy",
    desc: "Channel strategy, editorial planning, content operations, and measurement frameworks built around actual business objectives.",
  },
  {
    title: "Production Direction",
    desc: "Creative direction and production oversight for video, audio, and live productions - from pre-production planning through final delivery.",
  },
  {
    title: "Drone Photography & Videography",
    desc: "Aerial and dynamic ground-level visuals for brand content, event coverage, and location shoots. Cinematic perspectives that ground-based production can't reach.",
  },
  {
    title: "Voiceover & On-Air Presenting",
    desc: "Professional voice talent and on-camera presenting for broadcast, digital, and corporate productions. Delivery that sounds as intentional as the content it serves.",
  },
  {
    title: "On-Air Personality & Hosting",
    desc: "Experienced hosting for radio, television, live events, and digital media - bringing authority, warmth, and presence to any format.",
  },
  {
    title: "Media Systems Audits",
    desc: "A structured review of existing media operations, tooling, and workflows - with a clear written report and prioritised recommendations.",
  },
];

export default function ShapMediaPage() {
  return (
    <>
      <section aria-labelledby="shap-heading" className="hero">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/SMG CREST.jpg"
            alt="SHAP Media Group"
            className="logo-shap"
            style={{ height: 48, display: "block" }}
          />
          <p className="hero-eyebrow" style={{ margin: 0 }}>SHAP Media Group</p>
        </div>
        <h1 id="shap-heading" className="hero-title">
          Operational media expertise for creators who are building something real.
        </h1>
        <p className="hero-body">
          SHAP Media Group is the consulting and production arm of OooBooGoo Inc.
          We work with creators, media organisations, and brands that need more
          than advice - they need systems that actually operate. Our work is
          grounded in real-world experience: understanding how communication
          works under pressure, how trust is built over time, and how to build
          a media presence that holds up.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
          <Link href="/about" className="btn btn-ghost">About OooBooGoo</Link>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="founder-heading" className="section">
        <p className="section-eyebrow">Who We Are</p>
        <h2 id="founder-heading" className="section-title">
          Built on 20 years of real-world communication.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <p className="section-body">
              SHAP Media Group was founded by Sean Shapiro - a former police officer
              and media relations specialist with over two decades in public service
              and strategic communication. Sean built his reputation transforming
              how the Toronto Police connected with the public online, developing
              the systems and voice that let a large institution communicate with
              clarity and trust at scale.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              That background shapes everything about how we work. Public service
              teaches you that communication isn&apos;t just messaging. It&apos;s credibility.
              It&apos;s trust built in real time, under real pressure, with real
              consequences. We bring that same discipline to every client engagement
              - whether that&apos;s a podcast launch, a brand&apos;s social strategy, or a
              complex production build.
            </p>
            <p className="section-body" style={{ marginTop: 16 }}>
              We don&apos;t do fluff. We don&apos;t do cookie-cutter. We work with clients
              who want content that&apos;s clear, authentic, and built to actually
              connect with the people it&apos;s meant to reach.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "20+ years", desc: "Public service and strategic communication experience" },
              { label: "Trust-first", desc: "Every engagement starts with credibility, not just content" },
              { label: "Operator mindset", desc: "Systems that work under real conditions, not ideal ones" },
              { label: "North America", desc: "Working with organisations and creators across the continent" },
            ].map(({ label, desc }) => (
              <div
                key={label}
                style={{
                  padding: "20px 24px",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                  background: "var(--color-surface)",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--color-text)", marginBottom: 4 }}>{label}</p>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--color-text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="services-heading" className="section">
        <p className="section-eyebrow">Services</p>
        <h2 id="services-heading" className="section-title">
          What we do.
        </h2>
        <p className="section-body">
          Every engagement begins with understanding the full context - the
          creator&apos;s goals, their current operations, their audience, and the
          constraints they&apos;re working within. From there we design systems that
          fit, not templates borrowed from someone else&apos;s playbook.
        </p>
        <div className="services-grid">
          {services.map(({ title, desc }) => (
            <div key={title} className="service-item">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="for-who-heading" className="section">
        <p className="section-eyebrow">Who We Work With</p>
        <h2 id="for-who-heading" className="section-title">
          The right fit.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginTop: 36 }}>
          {[
            { label: "Independent creators", desc: "Podcasters, streamers, YouTubers, and multi-platform creators scaling past the DIY stage." },
            { label: "Business owners & entrepreneurs", desc: "Building a public voice, a content strategy, or a media presence that supports their business goals." },
            { label: "Media organisations", desc: "Newsrooms, editorial teams, and broadcast groups building digital-first production capacity." },
            { label: "Brands with a voice", desc: "Companies developing original content, executive communication programmes, and owned-media properties." },
            { label: "Speakers & thought leaders", desc: "Individuals building a public presence through keynotes, podcast appearances, and digital content." },
            { label: "Professionals in transition", desc: "People moving from institutional or public-sector roles into the creator or media economy." },
          ].map(({ label, desc }) => (
            <div key={label} style={{ padding: "24px", border: "1px solid var(--color-border)", borderRadius: 12, background: "var(--color-surface)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", marginBottom: 8 }}>{label}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="ventures-heading" className="section">
        <p className="section-eyebrow">Other Ventures</p>
        <h2 id="ventures-heading" className="section-title">
          Beyond the agency work.
        </h2>
        <p className="section-body">
          Sean&apos;s work in public safety communication extends beyond client
          engagements into two ongoing projects rooted in that same background.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginTop: 36 }}>
          {[
            {
              label: "Better Traffic",
              url: "https://bettertraffic.ca",
              desc: "A not-for-profit organisation dedicated to traffic safety education and awareness across Canada.",
            },
            {
              label: "Ask A Traffic Cop",
              url: "https://askatrafficcop.ca",
              desc: "A livestream show covering traffic safety questions and road law, operating under the Better Traffic umbrella.",
            },
          ].map(({ label, url, desc }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "24px",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                background: "var(--color-surface)",
                textDecoration: "none",
              }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", marginBottom: 8 }}>{label}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--color-text-muted)", marginBottom: 12 }}>{desc}</p>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontWeight: 600 }}>Visit site →</span>
            </a>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="shap-cta-heading" className="section">
        <p className="section-eyebrow">Get Started</p>
        <h2 id="shap-cta-heading" className="section-title">
          Tell us about your situation.
        </h2>
        <p className="section-body">
          All engagements begin with a discovery conversation. There&apos;s no
          hard sell - we want to understand your goals before proposing anything.
          If we&apos;re not the right fit, we&apos;ll say so.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/contact" className="btn btn-primary">Contact SHAP Media</Link>
        </div>
      </section>
    </>
  );
}
