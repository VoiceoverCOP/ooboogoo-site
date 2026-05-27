import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Software products by OooBooGoo Inc. — focused, native apps for macOS and iOS.",
};

const products = [
  {
    icon: "✦",
    name: "Ponder",
    tagline: "Capture, organise, and revisit your thinking.",
    description:
      "Ponder is a lightweight note-taking app for macOS and iOS built for writers and thinkers who need a quick place to capture ideas without the overhead of a full knowledge-management system.",
    platforms: "macOS · iOS · iPadOS",
  },
  {
    icon: "◉",
    name: "Tally",
    tagline: "Track what matters. Skip everything else.",
    description:
      "Tally is a minimal habit and counter tracker for iOS. No streaks theatre, no social features — just a clean interface for keeping score of the things you want to do more (or less) of.",
    platforms: "iOS · iPadOS · Apple Watch",
  },
  {
    icon: "⬡",
    name: "Conduit",
    tagline: "Automate the handoffs between your tools.",
    description:
      "Conduit is a macOS utility that watches for file-system events and triggers customisable actions — moving files, running scripts, or posting webhooks — without any coding required.",
    platforms: "macOS",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section aria-labelledby="products-heading" className="hero">
        <p className="hero-eyebrow">Our Products</p>
        <h1 id="products-heading" className="hero-title">
          Apps we&apos;re proud to ship.
        </h1>
        <p className="hero-body">
          Each product is sold directly through the Mac App Store or App Store.
          No subscriptions forced where they don&apos;t belong; no dark patterns.
        </p>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="product-list-heading" className="section">
        <p className="section-eyebrow">Software Catalogue</p>
        <h2 id="product-list-heading" className="section-title">
          Current lineup.
        </h2>
        <div className="product-grid">
          {products.map(({ icon, name, tagline, description, platforms }) => (
            <article key={name} className="product-card">
              <div className="product-icon" aria-hidden="true">
                {icon}
              </div>
              <h3 className="product-name">{name}</h3>
              <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-text)", marginBottom: 8 }}>
                {tagline}
              </p>
              <p className="product-desc">{description}</p>
              <p className="product-platform">{platforms}</p>
            </article>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="roadmap-heading" className="section">
        <p className="section-eyebrow">What's Next</p>
        <h2 id="roadmap-heading" className="section-title">
          More in development.
        </h2>
        <p className="section-body">
          We maintain a small, focused backlog. New products and major updates
          are announced via our contact list — sign up on the{" "}
          <a href="/contact" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>
            contact page
          </a>{" "}
          to be notified first.
        </p>
      </section>
    </>
  );
}
