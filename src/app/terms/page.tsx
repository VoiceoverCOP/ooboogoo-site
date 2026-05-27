import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for OooBooGoo Inc. and its apps.",
};

const EFFECTIVE_DATE = "May 27, 2025";
const EMAIL = "hello@ooboogoo.com";

export default function TermsPage() {
  return (
    <>
      <section aria-labelledby="terms-heading" className="hero">
        <p className="hero-eyebrow">Legal</p>
        <h1 id="terms-heading" className="hero-title">
          Terms of Service
        </h1>
        <p className="hero-body">
          Effective date: {EFFECTIVE_DATE}
        </p>
      </section>

      <hr className="section-divider" />

      <section className="section">
        <div className="prose">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the apps,
            website, and other services (collectively, &ldquo;Services&rdquo;) provided
            by OooBooGoo Inc. (&ldquo;OooBooGoo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;). By using our Services, you agree to be bound by these
            Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using any of our apps or accessing our
            website, you agree to these Terms. If you do not agree, do not use our
            Services.
          </p>

          <h2>2. Licence</h2>
          <p>
            OooBooGoo grants you a limited, non-exclusive, non-transferable, and
            revocable licence to use our apps for your personal or internal business
            purposes, subject to these Terms and any applicable App Store terms.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Copy, modify, or distribute our apps or their content</li>
            <li>Reverse engineer or decompile any part of the software</li>
            <li>Remove or alter any proprietary notices or labels</li>
            <li>Use the Services for any unlawful purpose</li>
          </ul>

          <h2>3. Purchases and Refunds</h2>
          <p>
            All purchases are processed by Apple through the App Store or Mac App
            Store. Refunds are subject to Apple&apos;s refund policies. We do not
            process refunds directly. For refund requests, contact Apple Support.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, design, code, and trademarks associated with OooBooGoo
            Inc. and its products are owned by or licensed to OooBooGoo Inc. and
            are protected by applicable intellectual property laws.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            Our Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, express or implied, including but not limited
            to implied warranties of merchantability, fitness for a particular
            purpose, or non-infringement.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, OooBooGoo Inc. shall
            not be liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of, or inability
            to use, our Services.
          </p>

          <h2>7. Privacy</h2>
          <p>
            Your use of our Services is also governed by our{" "}
            <a href="/privacy">Privacy Policy</a>, which is incorporated into these
            Terms by reference.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We may update these Terms at any time. Material changes will be
            communicated by updating the effective date above. Continued use of our
            Services constitutes acceptance of the revised Terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws
            of the State of California, United States, without regard to its
            conflict of law provisions.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
