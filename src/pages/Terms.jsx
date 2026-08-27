import { LegalPage, H2 } from './Legal';

// No Terms prototype existed in the asset library (only Privacy did). Written
// fresh here, consistent with the Privacy Policy's facts — UK trade-business
// SaaS, free trial then monthly, no invented clauses beyond standard SaaS terms.
export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="[DATE]"
      intro="These are the terms you agree to by using Vessant. We've kept them in plain English — if anything is unclear, email us and we'll explain it properly."
    >
      <H2>1. Who these terms are with</H2>
      <p>
        These terms are between you (a trade business using or trialling Vessant) and [Vessant Ltd,
        registered in England and Wales, company number [NUMBER], registered office [ADDRESS]] — or,
        before incorporation, the sole trader operating as Vessant. By starting a trial or paying for the
        service you agree to these terms.
      </p>

      <H2>2. The service</H2>
      <p>
        Vessant answers calls and messages on your behalf, replies to enquiries in your business name, and
        books appointments into your diary, as described on this website. The service is provided to
        businesses, not consumers.
      </p>

      <H2>3. Free trial</H2>
      <p>
        Where offered, the free trial runs for the period stated at sign-up. No card is required to start
        a trial. We&rsquo;ll tell you before any paid period begins.
      </p>

      <H2>4. Fees and payment</H2>
      <p>
        Paid plans are billed monthly in advance. Prices are as shown to you at sign-up or as agreed
        directly with us. You can cancel at any time; cancelling stops the next billing cycle, it does not
        refund the current one.
      </p>

      <H2>5. Your responsibilities</H2>
      <ul className="my-3 list-disc space-y-1 pl-5">
        <li>Give us accurate information about your business, pricing and availability so the service can represent you correctly</li>
        <li>Tell us promptly if something it says or books is wrong</li>
        <li>Only use the service for a genuine UK trade business, not to impersonate another business or mislead customers</li>
      </ul>

      <H2>6. What we&rsquo;re responsible for</H2>
      <p>
        We&rsquo;ll provide the service with reasonable skill and care and aim to keep it available, but
        we don&rsquo;t guarantee it will be uninterrupted or error-free. The AI can get things wrong; a
        human is always reachable, and you remain responsible for the jobs you ultimately accept.
      </p>

      <H2>7. Data</H2>
      <p>
        How we handle personal data — yours and your customers&rsquo; — is set out in our{' '}
        <a href="/privacy" className="text-cyan-deep underline">
          Privacy Policy
        </a>
        , which forms part of these terms.
      </p>

      <H2>8. Ending the agreement</H2>
      <p>
        You can stop using the service and cancel at any time. We may suspend or end the service if fees
        go unpaid, if you materially breach these terms, or if we stop offering the service — in the
        latter case we&rsquo;ll give reasonable notice.
      </p>

      <H2>9. Liability</H2>
      <p>
        Nothing in these terms limits liability for death, personal injury caused by negligence, or fraud.
        Beyond that, our liability to you is limited to the fees you&rsquo;ve paid us in the 12 months
        before the claim.
      </p>

      <H2>10. Changes to these terms</H2>
      <p>We may update these terms from time to time. If a change materially affects you, we&rsquo;ll tell you before it takes effect.</p>

      <H2>11. Law</H2>
      <p>These terms are governed by the law of England and Wales.</p>
    </LegalPage>
  );
}
