import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Verify Our Job Portals | MilegaJob',
  description: 'Learn about MilegaJob\'s rigorous 3-step verification process for all 100+ job portals. We ensure security and legitimacy for Indian job seekers.',
  keywords: 'job portal verification, scam prevention, legitimate job sites India, MilegaJob verification process',
};

export default function HowWeVerifyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <section id="verification-process">
        <h1 className="text-3xl font-bold mb-6 text-center">How We Verify Our Job Portals</h1>
        <p className="text-lg mb-6">
          At <strong>MilegaJob</strong>, we prioritize the security and success of Indian job seekers. Every one of our 100+ listed portals undergoes a rigorous 3-step manual verification process before being added to our directory:
        </p>

        <ul className="list-disc list-inside space-y-4 mb-6">
          <li><strong>1. Domain Legitimacy:</strong> We verify that the portal is hosted on a secure, reputable domain and check for official government or corporate affiliations.</li>
          <li><strong>2. Freshness Check:</strong> Our team regularly audits links to ensure the portals are actively posting jobs within the last 30 days.</li>
          <li><strong>3. Scam Prevention:</strong> We cross-reference each portal against reported job scams and phishing databases to ensure zero-risk for our users.</li>
        </ul>

        <p className="text-sm italic text-gray-600">
          Note: MilegaJob is a free directory. We never ask for payments, and we only link to platforms that follow fair hiring practices in India.
        </p>
      </section>
    </div>
  );
}
