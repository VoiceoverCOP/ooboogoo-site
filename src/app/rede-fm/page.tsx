import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rede.fm",
  description:
    "Rede.fm is the preparation and production platform for creators, broadcasters, podcasters, and live show hosts. Currently in limited release.",
};

const WAITLIST_URL = "https://rede.fm";

const features = [
  {
    icon: "📋",
    title: "Show Planning & Scheduling",
    desc: "Structure every episode before it happens. Topics, segments, timing, notes, and assets - all in one place before you hit record.",
  },
  {
    icon: "🎙️",
    title: "Guest Management",
    desc: "Track every guest from outreach through post-show. Bios, talking points, availability, prep materials, and follow-up - in a single flow.",
  },
  {
    icon: "📁",
    title: "Media Kits & Creator Profiles",
    desc: "A living media kit for every show and every creator. Up-to-date, shareable, and professional - without manual maintenance.",
  },
  {
    icon: "🎯",
    title: "Audience Intake Systems",
    desc: "Customisable intake forms for audiences, listeners, and attendees. Collect what you need before the show - not after.",
  },
  {
    icon: "⚡",
    title: "Publishing Workflows",
    desc: "From recording to distribution: structured checklists, asset management, and channel-specific publishing templates.",
  },
  {
    icon: "🤝",
    title: "Collaborative Preparation",
    desc: "Co-hosts, producers, and guests in one shared workspace. Everyone arrives prepared, with no version-confusion.",
  },
  {
    icon: "📡",
    title: "Live Show Structure",
    desc: "Run-of-show documents, segment timers, and live production checklists - designed for the real conditions of live broadcasting.",
  },
  {
    icon: "🧠",
    title: "AI-Assisted Preparation",
    desc: "Research summaries, question generation, and briefing drafts - AI tools that accelerate prep without replacing the human layer.",
  },
];

export default function RedeFmPage() {
  return (
    <>
      <section aria-labelledby="rede-heading" className="hero">
        <div className="logo-rede-wrap" style={{ marginBottom: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <picture>
            <source srcSet="/rede_web_png/Rede_fm_DARK.png" media="(prefers-color-scheme: dark)" />
            <img
              src="/rede_web_png/rede-light.png"
              alt="Rede.fm"
              className="logo-rede"
              style={{ height: 52 }}
            />
          </picture>
        </div>
        <p className="hero-eyebrow">Limited Release</p>
        <h1 id="rede-heading" className="hero-title">
          The preparation platform for people who go live.
        </h1>
        <p className="hero-body">
          Rede.fm is built for the work that happens before you press record.
          For creators, podcasters, broadcasters, speakers, and live
          production teams - it&apos;s the system that makes the moment of going
          live feel prepared instead of improvised.
        </p>
        <div className="hero-actions">
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Request Access
          </a>
          <a href="#features" className="btn btn-ghost">See all features</a>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="section">
        <div style={{ maxWidth: 800 }}>
          <blockquote className="pull-quote">
            <p className="pull-quote-text">
              &ldquo;The best shows don&apos;t happen by accident. They happen because
              someone thought through every detail before the first minute.
              Rede.fm is that someone.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="features-heading" className="section" id="features">
        <p className="section-eyebrow">Platform Features</p>
        <h2 id="features-heading" className="section-title">Built for the full production lifecycle.</h2>
        <p className="section-body">
          Rede.fm covers the complete arc from idea to distribution - with
          every module designed around how creators and production teams
          actually work.
        </p>
        <div className="feature-grid">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="feature-card-icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="who-heading" className="section">
        <p className="section-eyebrow">Who It&apos;s For</p>
        <h2 id="who-heading" className="section-title">Built for creators who operate.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginTop: 36 }}>
          {[
            "Podcast hosts",
            "Live streamers",
            "Broadcast journalists",
            "Video creators",
            "Public speakers",
            "Online educators",
            "Event hosts",
            "Production teams",
          ].map((label) => (
            <div
              key={label}
              style={{
                padding: "16px 20px",
                border: "1px solid var(--color-border)",
                borderRadius: 9,
                background: "var(--color-surface)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--color-text)",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section className="section">
        <div className="waitlist-bar">
          <div>
            <h2>Now in limited release.</h2>
            <p>
              Rede.fm is currently available to a small group of early users
              while we validate the platform and refine the experience. Request
              access to join the next cohort.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Request Access →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
