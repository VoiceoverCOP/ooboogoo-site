import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for OooBooGoo Inc. and its apps.",
};

const EFFECTIVE_DATE = "May 27, 2025";
const COMPANY = "OooBooGoo Inc.";
const EMAIL = "hello@ooboogoo.com";

export default function PrivacyPage() {
  return (
    <>
      <section aria-labelledby="privacy-heading" className="hero">
        <p className="hero-eyebrow">Legal</p>
        <h1 id="privacy-heading" className="hero-title">
          Privacy Policy
        </h1>
        <p className="hero-body">
          Effective date: {EFFECTIVE_DATE}
        </p>
      </section>

      <hr className="section-divider" />

      <section className="section">
        <div className="prose">
          <p>
            {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the apps and
            website available at ooboogoo.com (collectively, the
            &ldquo;Services&rdquo;). This Privacy Policy explains what information we
            collect, how we use it, and the choices you have.
          </p>
          <p>
            By using any of our Services, you agree to the collection and use of
            information in accordance with this policy. If you do not agree,
            please discontinue use of our Services.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>1.1 Information you provide</h3>
          <p>
            We collect information you give us directly, such as:
          </p>
          <ul>
            <li>Name and email address when you contact us</li>
            <li>Messages and attachments you send to our support team</li>
          </ul>

          <h3>1.2 Information collected automatically</h3>
          <p>
            Our apps do not collect telemetry or usage analytics by default. Where
            optional crash reporting is offered, it is explicitly opt-in. If
            enabled, crash reports may include:
          </p>
          <ul>
            <li>Device model and operating system version</li>
            <li>App version and build number</li>
            <li>Stack trace at the time of the crash</li>
          </ul>
          <p>
            No personally identifiable information is included in crash reports.
          </p>

          <h3>1.3 Purchase information</h3>
          <p>
            All purchases are processed by Apple through the App Store. We do not
            receive or store your payment card details. We may receive a
            transaction receipt from Apple to verify a purchase.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your support requests and inquiries</li>
            <li>Diagnose and fix software bugs</li>
            <li>Improve our products</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third
            parties for their marketing purposes.
          </p>

          <h2>3. Data Retention</h2>
          <p>
            We retain your contact information only as long as necessary to resolve
            your inquiry or as required by law. Crash report data is anonymised and
            retained for up to 90 days.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            Our apps are distributed through Apple&apos;s App Store and Mac App
            Store. Apple&apos;s privacy practices are governed by{" "}
            <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">
              Apple&apos;s Privacy Policy
            </a>
            . We are not responsible for third-party services you may access
            through links in our apps.
          </p>

          <h2>5. Children&apos;s Privacy</h2>
          <p>
            Our Services are not directed at children under the age of 13. We do
            not knowingly collect personal information from children under 13. If
            you become aware that a child has provided us with personal information,
            please contact us so we can delete it.
          </p>

          <h2>6. Security</h2>
          <p>
            We implement commercially reasonable technical and organisational
            measures to protect your personal information. No method of electronic
            storage or transmission is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on where you reside, you may have the right to access,
            correct, or delete the personal information we hold about you. To
            exercise these rights, please contact us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
          <p>
            California residents may have additional rights under the California
            Consumer Privacy Act (CCPA). We do not sell personal information.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by updating the effective date at the top
            of this page. Continued use of our Services after a change constitutes
            your acceptance of the updated policy.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            Questions about this Privacy Policy? Contact us:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>
              Mail: OooBooGoo Inc., 548 Market St, PMB 12345, San Francisco, CA
              94104, United States
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
