import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">OooBooGoo</span>
          <p className="footer-tagline">Software that works for you.</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/products" className="footer-link">Products</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <Link href="/terms" className="footer-link">Terms of Service</Link>
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} OooBooGoo Inc. All rights reserved.
          <br />
          <span style={{ fontSize: "0.8125rem" }}>hello@ooboogoo.com</span>
        </p>
      </div>
    </footer>
  );
}
