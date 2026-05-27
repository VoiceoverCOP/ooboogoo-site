import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OooBooGoo Inc. — Software for macOS and iOS",
  description:
    "OooBooGoo Inc. builds thoughtful software for macOS and iOS — productivity tools and utilities designed around how people actually work.",
};

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-heading">
        <div className="hero">
          <p className="hero-eyebrow">OooBooGoo Inc.</p>
          <h1 id="hero-heading" className="hero-title">
            Software built around real workflows.
          </h1>
          <p className="hero-body">
            We design and develop software for macOS and iOS that removes
            friction from everyday work. Every product we ship starts with a
            genuine problem and ends with a clear, focused solution.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="btn btn-primary">
              View Our Products
            </Link>
            <Link href="/about" className="btn btn-ghost">
              About the Company
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="what-we-do-heading" className="section">
        <p className="section-eyebrow">What We Do</p>
        <h2 id="what-we-do-heading" className="section-title">
          Independent software, thoughtfully made.
        </h2>
        <p className="section-body">
          OooBooGoo Inc. is an independent software company headquartered in
          San Francisco, CA. We build focused, high-quality apps for Apple
          platforms — each one designed to do one thing exceptionally well.
        </p>

        <div className="stat-row">
          <div className="stat-item">
            <p className="stat-num">3+</p>
            <p className="stat-label">Apps published</p>
          </div>
          <div className="stat-item">
            <p className="stat-num">10k+</p>
            <p className="stat-label">Users worldwide</p>
          </div>
          <div className="stat-item">
            <p className="stat-num">100%</p>
            <p className="stat-label">Indie, no outside funding</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="products-preview-heading" className="section">
        <p className="section-eyebrow">Our Software</p>
        <h2 id="products-preview-heading" className="section-title">
          Tools we&apos;ve shipped.
        </h2>
        <p className="section-body">
          From quick-capture utilities to structured project tools, everything
          we build lives natively on Apple&apos;s platforms.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/products" className="btn btn-ghost">
            See All Products &rarr;
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      <section aria-labelledby="cta-heading" className="section">
        <p className="section-eyebrow">Get in Touch</p>
        <h2 id="cta-heading" className="section-title">
          Questions? We&apos;d love to hear from you.
        </h2>
        <p className="section-body">
          Whether you have feedback on our apps, a press inquiry, or a support
          question — we read every message.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
