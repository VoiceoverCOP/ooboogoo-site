import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for OooBooGoo Inc. and its products, including Rede.fm.",
};

const EFFECTIVE_DATE = "May 27, 2025";
const EMAIL = "hello@ooboogoo.com";

export default function TermsPage() {
  return (
    <>
      <section aria-labelledby="terms-heading" className="hero">
        <p className="hero-eyebrow">Legal</p>
        <h1 id="terms-heading" className="hero-title">Terms of Service</h1>
        <p className="hero-body">Effective date: {EFFECTIVE_DATE}</p>
      </section>

      <hr className="section-divider" />

      <section className="section">
        <div className="prose">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
            Services operated by OooBooGoo Inc. (&ldquo;OooBooGoo&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;), including the Rede.fm platform, ooboogoo.com,
            and any associated applications. By using our Services, you agree
            to these Terms. If you do not agree, do not use our Services.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 13 years old to use our Services. By using
            them, you represent that you meet this requirement and that any
            information you provide is accurate. Organisations using the
            Services on behalf of their teams represent they have authority
            to bind the organisation to these Terms.
          </p>

          <h2>2. Account Registration</h2>
          <p>
            Some features of Rede.fm require an account. You are responsible
            for maintaining the confidentiality of your credentials and for
            all activity that occurs under your account. Notify us immediately
            at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> if you suspect
            unauthorised access.
          </p>

          <h2>3. Licence to Use</h2>
          <p>
            OooBooGoo grants you a limited, non-exclusive, non-transferable,
            revocable licence to use the Services for their intended purpose,
            subject to these Terms and any applicable App Store terms.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Reverse engineer, decompile, or disassemble any part of the software</li>
            <li>Reproduce, distribute, or create derivative works without authorisation</li>
            <li>Use the Services to violate applicable laws or regulations</li>
            <li>Attempt to gain unauthorised access to any part of the platform</li>
            <li>Use automated tools to scrape or harvest data from the platform</li>
          </ul>

          <h2>4. Creator Content</h2>
          <p>
            Content you create within Rede.fm (show plans, guest records,
            notes, media kits, and other production materials) remains yours.
            By storing it on our platform, you grant OooBooGoo a limited
            licence to host and serve it as necessary to provide the service.
            We do not use your creative content for any other purpose.
          </p>

          <h2>5. Subscriptions and Billing</h2>
          <p>
            Paid Rede.fm tiers are billed on the cycle stated at sign-up.
            Where distribution is through Apple&apos;s App Store, billing and
            refunds are governed by Apple&apos;s policies. For web-based
            subscriptions, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> for
            billing support. Cancellation takes effect at the end of the
            current billing period; we do not issue prorated refunds except
            where required by law.
          </p>

          <h2>6. Acceptable Use</h2>
          <p>
            You agree to use the Services only for lawful purposes consistent
            with these Terms. Prohibited uses include but are not limited to:
            distributing illegal content, harassing other users, attempting
            to compromise platform security, or impersonating others.
            OooBooGoo reserves the right to suspend or terminate accounts
            that violate this policy.
          </p>

          <h2>7. AI-Assisted Features</h2>
          <p>
            Rede.fm may include features that use artificial intelligence to
            assist with show preparation, research, and content drafting.
            AI-generated outputs are suggestions, not authoritative content.
            You remain responsible for reviewing and verifying any AI-assisted
            material before use.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            The Services may connect with or link to third-party platforms
            and tools (publishing platforms, calendar systems, distribution
            services). We are not responsible for the practices or content
            of third-party services. Your use of such services is governed
            by their respective terms.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            All trademarks, software, design, and content associated with
            OooBooGoo Inc., SHAP Media Group, and Rede.fm are owned by or
            licensed to OooBooGoo Inc. and protected under applicable law.
            Nothing in these Terms transfers any intellectual property rights
            to you beyond the licence described in Section 3.
          </p>

          <h2>10. Disclaimer of Warranties</h2>
          <p>
            The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, express or implied. We do not warrant
            that the Services will be uninterrupted, error-free, or free of
            harmful components.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, OooBooGoo
            Inc. shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of, or
            inability to use, the Services. Our aggregate liability shall
            not exceed the amounts you paid to us in the twelve months
            preceding the claim.
          </p>

          <h2>12. Privacy</h2>
          <p>
            Your use of our Services is governed by our{" "}
            <a href="/privacy">Privacy Policy</a>, which is incorporated
            into these Terms.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes
            will be communicated by updating the effective date and, where
            appropriate, by email to registered users. Continued use after
            the effective date constitutes acceptance.
          </p>

          <h2>14. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the Province of Ontario
            and the federal laws of Canada applicable therein. Any disputes
            shall be resolved in the courts of Ontario, Canada, except where
            applicable consumer protection law requires otherwise.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about these Terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <ul>
            <li>OooBooGoo Inc., 7805 Bayview Avenue, Suite 217, Thornhill, Ontario L3T 7N1, Canada</li>
          </ul>
        </div>
      </section>
    </>
  );
}
