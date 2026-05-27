import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for OooBooGoo Inc. and its products, including Rede.fm.",
};

const EFFECTIVE_DATE = "May 27, 2025";
const EMAIL = "support@ooboogoo.com";

export default function PrivacyPage() {
  return (
    <>
      <section aria-labelledby="privacy-heading" className="hero">
        <p className="hero-eyebrow">Legal</p>
        <h1 id="privacy-heading" className="hero-title">Privacy Policy</h1>
        <p className="hero-body">Effective date: {EFFECTIVE_DATE}</p>
      </section>

      <hr className="section-divider" />

      <section className="section">
        <div className="prose">
          <p>
            OooBooGoo Inc. (&ldquo;OooBooGoo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
            operates the Rede.fm platform, the ooboogoo.com website, and any
            associated mobile or desktop applications (collectively, the
            &ldquo;Services&rdquo;). This Privacy Policy explains what personal
            information we collect, how we use it, and your rights as a user.
          </p>
          <p>
            OooBooGoo Inc. is incorporated in Ontario, Canada and subject to
            the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA)
            and applicable provincial privacy legislation.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>1.1 Account information</h3>
          <p>When you create an account or join a waitlist, we may collect:</p>
          <ul>
            <li>Name and email address</li>
            <li>Occupation or creator category (optional, helps us improve the product)</li>
            <li>Authentication credentials (stored as secure hashes)</li>
          </ul>

          <h3>1.2 Creator and production data</h3>
          <p>
            When using Rede.fm, you may create show plans, guest records,
            media kits, run-of-show documents, and other production content.
            This data belongs to you. We store it to provide the service and
            do not use it for any purpose beyond operating the platform.
          </p>

          <h3>1.3 Usage and analytics</h3>
          <p>
            We collect anonymised usage data to understand how the platform
            is used and to improve it. This does not include personally
            identifiable information. Where third-party analytics are used,
            they are configured to respect Do Not Track preferences and
            exclude personal identifiers.
          </p>

          <h3>1.4 Communications</h3>
          <p>
            When you contact us, we retain the content of your message,
            your email address, and related correspondence to provide support
            and maintain service continuity.
          </p>

          <h3>1.5 Device and session data</h3>
          <p>
            We may collect standard server log data including IP addresses,
            browser type, and session duration for security and fraud
            prevention purposes. This data is not linked to individual user
            profiles.
          </p>

          <h3>1.6 Payments</h3>
          <p>
            All subscription payments are processed through trusted third-party
            payment processors. We do not store payment card details. We
            receive transaction confirmation records sufficient to manage
            billing.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and operate the Services</li>
            <li>Respond to support requests and inquiries</li>
            <li>Send transactional communications (account confirmation, password reset, billing)</li>
            <li>Notify waitlist participants of access availability</li>
            <li>Diagnose and resolve technical issues</li>
            <li>Improve and develop the platform</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not use your data for advertising. We do not sell, rent,
            or share personal information with third parties for their
            commercial purposes.
          </p>

          <h2>3. Consent</h2>
          <p>
            By using our Services, you consent to the collection and use of
            information as described in this policy. Where required by law,
            we obtain explicit consent before collecting sensitive categories
            of information. You may withdraw consent at any time by contacting
            us, subject to legal and contractual restrictions.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain account data for as long as your account is active or
            as needed to provide services. Creator and production data is
            retained according to your account settings; upon account deletion,
            it is removed within 30 days. Support communications are retained
            for up to 3 years.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            Our software is distributed through Apple&apos;s App Store and Mac App
            Store. Rede.fm may integrate with third-party publishing and
            scheduling platforms at your direction. We are responsible only
            for our own handling of data, not for the practices of third-party
            services you choose to connect.
          </p>

          <h2>6. Security</h2>
          <p>
            We implement reasonable technical and organisational safeguards
            appropriate to the sensitivity of the data we hold, including
            encryption in transit and at rest, access controls, and regular
            security reviews. No system is immune to all risks; we notify
            affected users promptly of any confirmed breach.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our Services are not intended for individuals under the age of 13.
            We do not knowingly collect personal information from children.
            If we become aware that a child has provided information, we will
            delete it promptly.
          </p>

          <h2>8. Your Rights</h2>
          <p>Under PIPEDA and applicable law, you have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent to certain processing activities</li>
            <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
          </ul>
          <p>To exercise these rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within 30 days.</p>

          <h2>9. Cross-Border Data Transfers</h2>
          <p>
            OooBooGoo Inc. is based in Canada. Our infrastructure may use
            servers located in Canada or the United States. Where data is
            transferred outside Canada, we take reasonable steps to ensure
            it receives equivalent protection.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We will notify users of material changes to this policy by
            updating the effective date and, where appropriate, by email.
            Continued use of the Services after a change constitutes
            acceptance of the updated policy.
          </p>

          <h2>11. Contact</h2>
          <p>
            Privacy inquiries and access requests:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>Mail: OooBooGoo Inc., 7805 Bayview Avenue, Suite 217, Thornhill, Ontario L3T 7N1, Canada</li>
          </ul>
        </div>
      </section>
    </>
  );
}
