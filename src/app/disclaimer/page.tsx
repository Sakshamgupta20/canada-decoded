import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Canada Decoded",
  description:
    "Important disclaimers about Canada Decoded services and information.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Disclaimer"
      lastUpdated="April 2026"
    >
      <p>
        Please read this Disclaimer carefully before using any information,
        content, or services provided by Canada Decoded.
      </p>

      <h2>1. No Legal or Immigration Advice</h2>
      <p>
        All information provided on this website — including blog posts,
        videos, consultations, and communications — is for{" "}
        <strong>informational and educational purposes only</strong>. It does
        not constitute legal, immigration, financial, or professional advice.
      </p>
      <p>
        We are not a licensed immigration consultancy. For matters that
        require legal representation, please consult a Regulated Canadian
        Immigration Consultant (RCIC) or a licensed Canadian lawyer.
      </p>

      <h2>2. No Agency Relationship</h2>
      <p>
        Using our website or services does not create a client-consultant,
        lawyer-client, or agency relationship. Canada Decoded is not
        authorized to represent you before any immigration authority.
      </p>

      <h2>3. No Guarantees</h2>
      <p>
        Canada Decoded makes no representations or warranties regarding:
      </p>
      <ul>
        <li>Visa or permit approvals</li>
        <li>Permanent residency outcomes</li>
        <li>Job placements or employer responses</li>
        <li>LMIA results</li>
        <li>Government processing timelines</li>
      </ul>
      <p>
        All immigration outcomes depend on government decisions, employer
        actions, and individual qualifications — none of which we control.
      </p>

      <h2>4. Third-Party Information</h2>
      <p>
        Our content may reference employers, professionals, service providers,
        or government programs. We do not guarantee the accuracy, legitimacy,
        or ongoing compliance of these third parties. Users are responsible
        for independent verification and due diligence.
      </p>

      <h2>5. Accuracy of Information</h2>
      <p>
        Immigration rules change frequently. While we strive to keep
        information current, we cannot guarantee that all content reflects the
        latest policies. Always verify critical details with official
        government sources.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Canada Decoded and its
        affiliates disclaim all liability for any damages, losses, or
        consequences arising from:
      </p>
      <ul>
        <li>Use of our content or services</li>
        <li>Reliance on information without independent verification</li>
        <li>Third-party interactions</li>
        <li>Unforeseen immigration outcomes</li>
      </ul>

      <h2>7. User Responsibility</h2>
      <p>
        You are solely responsible for decisions made based on information
        obtained through our services. We strongly encourage seeking licensed
        professional advice before taking significant action.
      </p>

      <h2>8. External Links</h2>
      <p>
        Our website may link to external resources for your convenience. We
        are not responsible for the content, accuracy, or practices of any
        third-party websites.
      </p>

      <h2>9. Acceptance</h2>
      <p>
        By using Canada Decoded&rsquo;s website or services, you acknowledge
        that you have read, understood, and agreed to this Disclaimer along
        with our Terms & Conditions and Privacy Policy.
      </p>
    </LegalLayout>
  );
}
