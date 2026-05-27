import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-ooboogoo.png"
            alt="OooBooGoo"
            className="logo-ooboogoo"
            style={{ height: 36, marginBottom: 14 }}
          />
          <p className="footer-tagline">
            An innovation lab, media group, and creator platform company — building systems for what comes next.
          </p>
          <address className="footer-address" style={{ fontStyle: "normal" }}>
            OooBooGoo Inc.<br />
            7805 Bayview Avenue, Suite 217<br />
            Thornhill, Ontario L3T 7N1<br />
            Canada
          </address>
        </div>

        <div>
          <p className="footer-col-title">Company</p>
          <nav aria-label="Footer navigation" className="footer-links">
            <Link href="/about" className="footer-link">About</Link>
            <Link href="/shap-media" className="footer-link">SHAP Media Group</Link>
            <Link href="/rede-fm" className="footer-link">Rede.fm</Link>
            <Link href="/platform" className="footer-link">Platform</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </nav>
        </div>

        <div>
          <p className="footer-col-title">Legal &amp; Support</p>
          <nav aria-label="Legal and support navigation" className="footer-links">
            <Link href="/support" className="footer-link">Support</Link>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
            <a href="mailto:hello@ooboogoo.com" className="footer-link">hello@ooboogoo.com</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">&copy; {year} OooBooGoo Inc. All rights reserved.</p>
        <p className="footer-copy">
          <Link href="/privacy" style={{ marginRight: 16 }} className="footer-link">Privacy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
