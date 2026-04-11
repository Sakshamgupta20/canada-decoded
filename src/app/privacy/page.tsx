import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Canada Decoded",
  description: "How Canada Decoded collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="April 2026"
    >
      <p>
        Your privacy matters. This Privacy Policy explains what information we
        collect, how we use it, and the choices you have about your data.
      </p>

      <h2>1. Information We Collect</h2>
      <p>When you interact with our services, we may collect:</p>
      <ul>
        <li>Name and contact information (email, phone)</li>
        <li>Profile details relevant to immigration consultations</li>
        <li>
          Information you voluntarily share during consultations or
          communications
        </li>
        <li>Basic analytics data (page views, device type, referral source)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Deliver consultation and advisory services</li>
        <li>Communicate with you about your inquiries</li>
        <li>Improve our content and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share limited
        information with:
      </p>
      <ul>
        <li>
          Verified third parties (employers, professionals) only with your
          explicit consent
        </li>
        <li>Service providers who help us operate the website</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We take reasonable steps to protect your information. However, no
        digital system is entirely secure, and we cannot guarantee absolute
        protection against unauthorized access.
      </p>

      <h2>5. Cookies & Tracking</h2>
      <p>
        Our website may use cookies to remember preferences and measure
        performance. You can disable cookies in your browser settings, though
        some features may stop working.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        Our website may contain links to external sites. We are not
        responsible for the privacy practices of those third-party websites.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your personal data</li>
        <li>Withdraw consent for data processing at any time</li>
      </ul>

      <h2>8. Data Retention</h2>
      <p>
        We retain personal information only as long as necessary to provide
        services and meet legal requirements. After this period, data is
        securely deleted or anonymized.
      </p>

      <h2>9. International Users</h2>
      <p>
        Canada Decoded is based in Ontario, Canada. By using our services, you
        consent to the transfer and processing of your information in Canada.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Significant
        changes will be communicated through our website.
      </p>

      <h2>11. Contact</h2>
      <p>
        For questions about this Privacy Policy or to exercise your rights,
        please contact us through the website.
      </p>
    </LegalLayout>
  );
}
