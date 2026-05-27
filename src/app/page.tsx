import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OooBooGoo Inc. - Media Systems. Creator Tools. Innovation.",
  description:
    "OooBooGoo Inc. is an innovation-driven media and technology company building creator tools, software products, and media systems that don't fit into ordinary boxes.",
};

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-heading">
        <div className="hero">
          <p className="hero-eyebrow">OooBooGoo Inc.</p>
          <h1 id="hero-heading" className="hero-title">
            Building media systems and creator tools that don't fit into ordinary boxes.
          </h1>
          <p className="hero-body">
            We are an innovation lab, media group, and creator platform company
            operating at the intersection of technology, creativity, and
            systems thinking. When existing categories don&apos;t work, we build
            new ones.
          </p>
          <div className="hero-actions">
            <Link href="/rede-fm" className="btn btn-primary">Explore Rede.fm</Link>
            <Link href="/about" className="btn btn-ghost">Our Story</Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="brands-heading" className="section">
        <p className="section-eyebrow">What We Build</p>
        <h2 id="brands-heading" className="section-title">
          Two operating entities. One innovation identity.
        </h2>
        <p className="section-body">
          OooBooGoo is the umbrella. Inside it: a media consultancy with real
          operational depth, and a software platform redefining how creators
          prepare and produce.
        </p>

        <div className="bento-grid">
          <div className="bento-cell bento-cell--featured" aria-label="Rede.fm - flagship product">
            <div>
              <div className="logo-rede-wrap" style={{ marginBottom: 20 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <picture>
                  <source srcSet="/rede_web_png/Rede_fm_DARK.png" media="(prefers-color-scheme: dark)" />
                  <img src="/rede_web_png/rede-light.png" alt="Rede.fm" className="logo-rede" style={{ height: 36 }} />
                </picture>
              </div>
              <span className="bento-tag">Flagship Product - Limited Release</span>
              <p className="bento-desc">
                The preparation and production platform for creators,
                broadcasters, podcasters, and live show hosts. Rede.fm
                structures the work that happens before you go live - so when
                the moment arrives, you&apos;re ready.
              </p>
              <Link href="/rede-fm" className="bento-link">
                Request access <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className="bento-feature-list" aria-label="Rede.fm features">
              <li>Show planning &amp; scheduling</li>
              <li>Guest management &amp; media kits</li>
              <li>Collaborative preparation workflows</li>
              <li>Creator profiles &amp; audience intake</li>
              <li>Live show structure &amp; run-of-show</li>
              <li>Publishing &amp; distribution workflows</li>
            </ul>
          </div>

          <div className="bento-cell">
            <div className="logo-shap-wrap" style={{ marginBottom: 20 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/SMG CREST.jpg" alt="SHAP Media Group" className="logo-shap" style={{ height: 48 }} />
            </div>
            <span className="bento-tag">Media &amp; Consulting</span>
            <h3 className="bento-name">SHAP Media Group</h3>
            <p className="bento-desc">
              Our media consulting and production arm. Strategic communications,
              livestream systems, creator coaching, podcast development, and
              content strategy for creators and brands who want to build
              something lasting.
            </p>
            <Link href="/shap-media" className="bento-link">
              Explore services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="bento-cell">
            <span className="bento-tag">Innovation Lab</span>
            <h3 className="bento-name">The OooBooGoo Approach</h3>
            <p className="bento-desc">
              The name was invented intentionally. No definitions, no baggage,
              no expectations - just a blank canvas for products and
              experiments that don&apos;t fit neatly into existing categories.
            </p>
            <Link href="/about" className="bento-link">
              Our philosophy <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="philosophy-heading" className="section">
        <p className="section-eyebrow">Why We Exist</p>
        <div style={{ maxWidth: 760 }}>
          <blockquote className="pull-quote" aria-labelledby="philosophy-heading">
            <h2 id="philosophy-heading" className="pull-quote-text">
              &ldquo;OooBooGoo exists because we believe there are problems no one
              else is thinking about solving.&rdquo;
            </h2>
          </blockquote>
          <p className="section-body" style={{ marginTop: 28 }}>
            Creativity, ingenuity, and a genuine desire to fix what&apos;s broken
            drive everything we build. We work at the crossover between media
            and technology - where operational expertise meets software
            thinking - because that&apos;s where the most interesting problems live.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about" className="btn btn-ghost">Read the full story</Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="platform-cta-heading" className="section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p className="section-eyebrow">Built for the Ecosystem</p>
            <h2 id="platform-cta-heading" className="section-title">
              Designed to integrate with the tools creators already use.
            </h2>
            <p className="section-body">
              From Apple platform compatibility to publishing APIs, everything
              we build is designed to fit into existing creative workflows -              not replace them.
            </p>
            <div style={{ marginTop: 32 }}>
              <Link href="/platform" className="btn btn-ghost">Platform overview</Link>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Apple ecosystem compatibility",
              "Calendar & notification integration",
              "Podcast & broadcast publishing",
              "API-first architecture",
              "AI-assisted preparation workflows",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "14px 18px",
                  border: "1px solid var(--color-border)",
                  borderRadius: 9,
                  background: "var(--color-surface)",
                  fontSize: "0.9rem",
                  color: "var(--color-text)",
                  fontWeight: 500,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
