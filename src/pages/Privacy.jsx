import { LegalPage, H2, H3, Table } from './Legal';

// Ported verbatim (content, not markup) from vessant-privacy-policy.html — the
// real GDPR/PECR copy already drafted for this business. [BRACKETED]
// placeholders kept visible since Vessant Ltd isn't incorporated yet.
export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="[DATE]"
      intro="This policy explains what personal information Vessant collects, why we collect it, and what rights you have over it. We have tried to write it in plain English rather than legal boilerplate. If anything is unclear, email us and we will explain it properly."
    >
      <H2>1. Who we are</H2>
      <p>Vessant provides AI answering and follow-up services to trade businesses in the United Kingdom.</p>
      <ul className="my-3 list-disc space-y-1 pl-5">
        <li>
          <strong className="text-navy">Legal entity:</strong> [Vessant Ltd, registered in England and
          Wales, company number [NUMBER]] — or, before incorporation, your own name as sole trader
        </li>
        <li>
          <strong className="text-navy">Registered office:</strong> [ADDRESS]
        </li>
        <li>
          <strong className="text-navy">Website:</strong> www.vessant.co.uk
        </li>
        <li>
          <strong className="text-navy">Contact:</strong> hello@vessant.co.uk
        </li>
      </ul>
      <p>We are the data controller for the information described in this policy, except where section 2 says otherwise.</p>

      <H2>2. Two different roles</H2>
      <p>It matters which of these applies, because your rights are exercised in different places.</p>
      <H3>When we are the controller</H3>
      <p>
        For visitors to this website, people who enquire about our services, and our own clients, we
        decide how and why your information is used. This policy governs that, and you can exercise your
        rights directly with us.
      </p>
      <H3>When we are a processor</H3>
      <p>
        When a trade business uses Vessant to answer its calls and messages, that business decides what
        happens to its customers&rsquo; information. We handle it on their instructions only. If you
        contacted a trade business and want to know how your information is used, that business is the
        controller and you should contact them — though you are welcome to contact us and we will help
        you reach them.
      </p>

      <H2>3. Information we collect</H2>
      <H3>When you visit this website</H3>
      <ul className="my-3 list-disc space-y-1 pl-5">
        <li>Pages viewed, time on page, approximate location, referring site, device and browser type</li>
        <li>Cookie identifiers, where you have accepted analytics cookies</li>
      </ul>
      <H3>When you enquire or book a call</H3>
      <ul className="my-3 list-disc space-y-1 pl-5">
        <li>Your name, business name, email address and phone number</li>
        <li>What you tell us about your trade, your area and how you currently handle enquiries</li>
        <li>Notes we take during a call with you</li>
      </ul>
      <H3>When you become a client</H3>
      <ul className="my-3 list-disc space-y-1 pl-5">
        <li>Business and billing details, including company number and address where applicable</li>
        <li>Payment records (card details are handled by Stripe and are never seen or stored by us)</li>
        <li>Configuration details for your service — your pricing, service area, availability and how you want enquiries handled</li>
      </ul>
      <H3>On behalf of our clients</H3>
      <p>
        Where we act as a processor, the information involved is typically the name, phone number, address
        and enquiry details of people contacting that trade business, along with the content of those
        calls and messages.
      </p>

      <H2>4. Why we use it, and our lawful basis</H2>
      <Table
        head={['What we do', 'Lawful basis']}
        rows={[
          ['Respond to your enquiry and arrange a call', 'Legitimate interests — answering someone who contacted us'],
          ['Provide and run the service you are paying for', 'Performance of a contract'],
          ['Take payment and keep accounting records', 'Contract, and legal obligation for tax records'],
          ['Improve how the service works and fix faults', 'Legitimate interests — running a functioning service'],
          ['Understand how the website is used', 'Consent, given through the cookie banner'],
          ['Send marketing to businesses that may benefit', 'Legitimate interests, with an opt-out in every message'],
        ]}
      />
      <p>
        Where we rely on legitimate interests, we have considered whether our interest is outweighed by
        your rights, and you can object at any time using the contact details below.
      </p>

      <H2>5. AI and automated processing</H2>
      <p>Our service uses AI to read and reply to enquiries on behalf of trade businesses. Some specifics worth stating plainly:</p>
      <ul className="my-3 list-disc space-y-1 pl-5">
        <li>
          <strong className="text-navy">We do not use conversation content to train AI models.</strong>{' '}
          Messages are processed to generate a reply and are not fed back into model training, by us or by
          our providers.
        </li>
        <li>
          <strong className="text-navy">No decisions with legal or similarly significant effects are made
          automatically.</strong> The AI books appointments and answers questions. It does not decide
          anything that materially affects a person&rsquo;s rights, and a human is always reachable.
        </li>
        <li>
          <strong className="text-navy">People are told they can reach a human.</strong> Our clients&rsquo;
          customers are able to ask for a person at any point in a conversation.
        </li>
      </ul>
      <p>
        [IF YOU RECORD OR TRANSCRIBE CALLS, ADD: Calls handled by our voice service are [recorded /
        transcribed]. Callers are informed at the start of the call, and recordings are kept for [PERIOD]
        before deletion.]
      </p>

      <H2>6. Cookies and analytics</H2>
      <p>
        We use cookies that are strictly necessary for the site to function, and analytics cookies that
        tell us which pages people read. Analytics cookies are only set if you accept them, and you can
        change your mind at any time through your browser settings or our cookie banner.
      </p>
      <p>We do not use advertising or retargeting cookies, and we do not sell any information about you.</p>

      <H2>7. Marketing</H2>
      <p>
        We contact trade businesses by email and phone about our services. Every marketing email contains
        a one-click unsubscribe, and we stop immediately on request — by reply, or to hello@vessant.co.uk.
      </p>
      <p>We do not send marketing text messages to individuals without their consent.</p>

      <H2>8. Who we share information with</H2>
      <p>We do not sell personal information. We share it only with the suppliers that make the service work:</p>
      <Table
        head={['Supplier', 'What they do', 'Where']}
        rows={[
          ['HighLevel', 'CRM, messaging and booking platform', 'United States'],
          ['Twilio', 'Phone numbers, calls and SMS delivery', 'United States'],
          ['Anthropic', 'AI model that generates replies', 'United States'],
          ['Stripe', 'Payment processing', 'United States and Ireland'],
        ]}
      />
      <p>We may also share information where the law requires it, or to establish or defend legal claims.</p>

      <H2>9. Information sent outside the UK</H2>
      <p>
        Some of our suppliers are based in the United States, so information is transferred outside the
        UK. Where that happens we rely on the UK International Data Transfer Addendum to the EU Standard
        Contractual Clauses, or another transfer mechanism approved under UK data protection law. You can
        request details of the safeguards in place.
      </p>

      <H2>10. How long we keep it</H2>
      <Table
        head={['Information', 'Kept for']}
        rows={[
          ['Website analytics', '14 months'],
          ['Enquiries that do not become clients', '24 months from last contact'],
          ['Client records, contracts and invoices', '6 years after the contract ends, for tax purposes'],
          ['Conversation and lead data held for clients', '12 months, or sooner if the client instructs us'],
          ['Call recordings, where used', '[6 months]'],
        ]}
      />
      <p>
        When a client stops using Vessant, we return or delete the information we hold on their behalf
        within 30 days, unless we are legally required to keep it.
      </p>

      <H2>11. How we protect it</H2>
      <ul className="my-3 list-disc space-y-1 pl-5">
        <li>Access is limited to people who need it, protected by strong passwords and two-factor authentication</li>
        <li>Information is encrypted in transit, and our suppliers encrypt it at rest</li>
        <li>Payment card details never reach our systems — Stripe handles them directly</li>
        <li>Supplier access is reviewed and removed when no longer needed</li>
      </ul>
      <p>
        No system is completely secure, but we take these obligations seriously and will tell you and the
        ICO promptly if a breach occurs that is likely to affect your rights.
      </p>

      <H2>12. Your rights</H2>
      <p>Under UK data protection law you have the right to:</p>
      <ul className="my-3 list-disc space-y-1 pl-5">
        <li>Ask what information we hold about you and get a copy</li>
        <li>Have inaccurate information corrected</li>
        <li>Ask us to delete information, where we have no continuing reason to keep it</li>
        <li>Ask us to restrict how we use it, or object to us using it</li>
        <li>Receive information you gave us in a portable format</li>
        <li>Withdraw consent at any time, where we relied on consent</li>
      </ul>
      <p>Email hello@vessant.co.uk and we will respond within one month. There is no charge.</p>

      <H2>13. Complaints</H2>
      <p>
        If you are unhappy with how we have handled your information, please tell us first so we can put
        it right. You also have the right to complain to the Information Commissioner&rsquo;s Office at{' '}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-cyan-deep underline">
          ico.org.uk
        </a>{' '}
        or on 0303 123 1113.
      </p>

      <H2>14. Children</H2>
      <p>Our services are for businesses and are not directed at children. We do not knowingly collect information about anyone under 18.</p>

      <H2>15. Changes to this policy</H2>
      <p>If we change this policy we will update the date at the top. Where a change materially affects how we handle your information, we will contact clients directly.</p>
    </LegalPage>
  );
}
