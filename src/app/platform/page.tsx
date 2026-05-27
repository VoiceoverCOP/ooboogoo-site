import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "OooBooGoo builds software designed for the Apple ecosystem and the creator technology stack - from calendar integration to publishing APIs.",
};

const integrationCategories = [
  {
    title: "Apple Ecosystem",
    items: [
      { icon: "🍎", title: "Sign in with Apple", desc: "Privacy-preserving authentication that respects users' choice not to share their email." },
      { icon: "☁️", title: "iCloud Compatibility", desc: "Data portability and sync designed around the platforms users already trust." },
      { icon: "🔔", title: "Apple Push Notifications (APNs)", desc: "Real-time notifications for show reminders, guest confirmations, and production alerts." },
      { icon: "📅", title: "Calendar Integration", desc: "EventKit-compatible show scheduling synced to the system calendars creators use every day." },
      { icon: "⌨️", title: "Shortcuts & Automation", desc: "Siri Shortcuts support so power users can trigger Rede.fm actions from their own automation flows." },
      { icon: "🖥️", title: "macOS & iOS Native Feel", desc: "Designed to behave like Apple platform software - not a web app ported to a container." },
    ],
  },
  {
    title: "Creator Workflows",
    items: [
      { icon: "🎙️", title: "RSS & Podcast Publishing", desc: "Standards-compliant podcast RSS generation with chapter support and Apple Podcasts metadata." },
      { icon: "📤", title: "Multi-Platform Distribution", desc: "Publishing checklists and export templates for every major creator platform." },
      { icon: "🗓️", title: "Scheduling Integrations", desc: "Guest scheduling and availability coordination connected to calendar systems." },
      { icon: "📝", title: "Show Notes & Transcripts", desc: "Structured show notes export compatible with CMS platforms and email tools." },
    ],
  },
  {
    title: "Mobile Apps",
    items: [
      { icon: "📱", title: "iOS App", desc: "A native iPhone and iPad app so creators can manage shows, guests, and prep workflows on the go. Coming soon." },
      { icon: "🤖", title: "Android App", desc: "Full Android support bringing Rede.fm's preparation tools to Android creators wherever they work. Coming soon." },
    ],
  },
  {
    title: "APIs & Automation",
    items: [
      { icon: "🔗", title: "Rede.fm API", desc: "A RESTful API for developers integrating Rede.fm data into their own tools and workflows." },
      { icon: "🤖", title: "AI Preparation Layer", desc: "AI-assisted research, briefing generation, and question drafting - integrated directly into the preparation workflow." },
      { icon: "⚙️", title: "Webhook Support", desc: "Event-driven webhooks for show state changes, guest confirmations, and publishing milestones." },
      { icon: "🔄", title: "Automation-Ready Architecture", desc: "Designed to connect with automation platforms and custom internal tooling." },
    ],
  },
];

export default function PlatformPage() {
  return (
    <>
      <section aria-labelledby="platform-heading" className="hero">
        <p className="hero-eyebrow">Platform</p>
        <h1 id="platform-heading" className="hero-title">
          Built to fit the tools you already use.
        </h1>
        <p className="hero-body">
          Everything we build is designed to work within existing creative and
          technical ecosystems - not to replace them. Our platform philosophy
          is integration-first: meet creators where they already are.
        </p>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="approach-heading" className="section">
        <p className="section-eyebrow">Our Approach</p>
        <h2 id="approach-heading" className="section-title">
          Platform citizenship, not platform lock-in.
        </h2>
        <p className="section-body">
          The creator technology stack is already complex. Our software is
          designed as a complement to that stack - connecting with the
          calendars, notifications, publishing systems, and APIs creators
          already depend on. We follow platform standards, respect user
          privacy, and contribute to the ecosystem rather than fragment it.
        </p>
        <div className="stat-row">
          {[
            { num: "Apple-first", label: "Authentication, push, calendar, and sync built to Apple standards" },
            { num: "API-first", label: "Every core Rede.fm feature is accessible via documented API" },
            { num: "Privacy-first", label: "Minimum data collection, no third-party ad tracking, PIPEDA-compliant" },
          ].map(({ num, label }) => (
            <div key={num}>
              <p className="stat-num" style={{ fontSize: "1.375rem" }}>{num}</p>
              <p className="stat-label" style={{ maxWidth: 200 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="integrations-heading" className="section">
        <p className="section-eyebrow">Compatibility</p>
        <h2 id="integrations-heading" className="section-title">
          What we&apos;re built to work with.
        </h2>
        {integrationCategories.map(({ title, items }) => (
          <div key={title} className="integration-category">
            <h3 className="integration-category-title">{title}</h3>
            <div className="integration-items">
              {items.map(({ icon, title: itemTitle, desc }) => (
                <div key={itemTitle} className="integration-item">
                  <span className="integration-item-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <h4>{itemTitle}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="dev-cta-heading" className="section">
        <p className="section-eyebrow">Developer Access</p>
        <h2 id="dev-cta-heading" className="section-title">
          Building something that connects?
        </h2>
        <p className="section-body">
          API documentation and developer access for Rede.fm integrations is
          available to qualified partners. Contact us to discuss your use case.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/contact" className="btn btn-primary">Contact for API access</Link>
        </div>
      </section>
    </>
  );
}
