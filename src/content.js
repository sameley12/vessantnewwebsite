// Single source of truth for page copy, per §9 of the build plan — so a
// non-developer can change a headline without touching component code.
//
// DEMO_NUMBER is a placeholder pending the real demo line (see build plan §2, §16).
// Find-and-replace this one constant once the number is confirmed.
export const DEMO_NUMBER = '0800 000 0000';
export const DEMO_NUMBER_TEL = 'tel:+448000000000';
export const DEMO_NUMBER_SMS = 'sms:+448000000000?body=DEMO';
export const CONTACT_EMAIL = 'hello@vessant.co.uk';

export const nav = {
  links: [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#who-its-for', label: "Who it's for" },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ],
  cta: `Try it: ${DEMO_NUMBER}`,
};

export const hero = {
  eyebrow: 'AI RECEPTIONIST FOR UK TRADES',
  line1: "You're on a job.",
  line2: "We'll get the phone.",
  sub: "Vessant answers the calls you can't and texts back within 60 seconds — from your business name — then books the job into your diary.",
  cta: `Ring the demo line: ${DEMO_NUMBER}`,
  secondary: `Or text DEMO to ${DEMO_NUMBER}`,
  trust: 'UK-built · PECR & GDPR compliant · No change to how you work',
};

export const cost = {
  headline: [
    { text: 'Miss four calls a week. At an average job of ', hl: false },
    { text: '£340', hl: true },
    { text: ", that's ", hl: false },
    { text: '£70,720 a year', hl: true },
    { text: ' walking to whoever picks up second.', hl: false },
  ],
  note: "Illustrative, based on an average job value of £340 and four missed calls a week, every week. It's arithmetic, not a promise — use your own numbers in the calculator below.",
};

export const artifacts = [
  {
    id: 'shuffler',
    heading: 'Every channel, one inbox.',
    descriptor: 'Calls, texts, WhatsApp and web forms all land in the same place.',
    items: [
      { channel: 'MISSED CALL', detail: '07700 900 118', time: '09:41' },
      { channel: 'TEXT', detail: '"you free thurs?"', time: '11:02' },
      { channel: 'WEBSITE FORM', detail: 'Boiler service', time: '14:20' },
    ],
  },
  {
    id: 'typewriter',
    heading: 'Replies in 60 seconds, in your name.',
    descriptor: 'Your business name, your tone. Not a switchboard.',
    message:
      "Hi, it's Dave's Heating. Sorry I missed you — I'm on a job right now. What do you need doing, and whereabouts are you? I'll get you booked in.",
  },
  {
    id: 'scheduler',
    heading: 'Booked into your diary.',
    descriptor: 'Straight into your calendar, with your rules on when you work.',
  },
];

export const protocol = [
  {
    n: '01',
    title: 'THE ENQUIRY ARRIVES',
    lines: [
      "Someone rings while you're up a ladder, or texts at 9pm.",
      'Vessant picks it up — every time, day or night.',
    ],
  },
  {
    n: '02',
    title: 'VESSANT ANSWERS',
    lines: [
      'It replies by text in under a minute from your business name,',
      'asks what’s needed and where, and handles the back-and-forth.',
    ],
  },
  {
    n: '03',
    title: 'THE JOB LANDS IN YOUR DIARY',
    lines: ['Booked around the hours you actually work. You get the', 'summary. You turn up.'],
  },
];

export const demo = {
  callHeading: 'Ring it.',
  callSub: "It'll answer like it would for your customer. Takes 40 seconds.",
  callPrompt: 'Try: "Hi, my boiler’s making a noise, are you free this week?"',
  textHeading: 'Text it.',
  textSub: "Same system, same 60-second reply — this time by text.",
  textPrompt: 'Try: "Hi, my boiler’s making a noise, are you free this week?"',
  footnote:
    'This is the same system your customers would get. Nothing you type here is used to contact you.',
};

export const calculator = {
  fields: [
    { key: 'missed', label: 'Calls you miss in a week', min: 0, max: 30, step: 1, default: 6 },
    { key: 'value', label: 'Average job value', min: 50, max: 3000, step: 25, default: 340, currency: true },
    { key: 'close', label: 'Of the ones you do answer, how many turn into work', min: 10, max: 90, step: 5, default: 40, percent: true },
  ],
  recoveryRate: 0.5,
  disclaimer:
    "Assumes Vessant recovers half the enquiries you currently miss. Your mileage will vary; we'd rather under-promise.",
  resultLabel: 'Recoverable revenue',
  resultSub: 'a year',
};

export const manifesto = {
  small: 'Most AI receptionists were built for American dental practices and translated afterwards.',
  drama: ['We built ours in the UK, for trades,', 'with your name on every message.'],
  highlight: 'your name',
};

export const tradeTiles = [
  { key: 'plumbing', name: 'Plumbing', line: "Burst pipe at 7am, and you're already under someone else's sink." },
  { key: 'heating', name: 'Heating', line: 'Every October the phone goes and doesn’t stop.' },
  { key: 'electrical', name: 'Electrics', line: "Half your calls are quotes you'll never chase up." },
  { key: 'roofing', name: 'Roofing', line: "It rains, everyone rings at once, you're up a ladder." },
  { key: 'building', name: 'Building', line: 'Enquiries come in mid-pour and go cold by Friday.' },
  { key: 'landscaping', name: 'Landscaping', line: "Spring hits and you're booked out before you've replied." },
];

// Ported verbatim from the finished GHL checklist (vessant-criteria-accordion-v2.html).
export const checklist = [
  {
    q: 'Does it reply in under 60 seconds?',
    a: 'Not “within the hour.” The first business to respond wins the job roughly half the time, and most enquiries arrive when you’re on a roof or under a sink.',
  },
  {
    q: 'Does it text from your own business name?',
    a: 'Your customer should see your company, not an unfamiliar number or a generic AI service.',
  },
  {
    q: 'Does it book straight into the diary?',
    a: 'Booking inside the conversation, not by sending a link and hoping they click it.',
  },
  {
    q: 'Is it built for UK numbers and UK hours?',
    a: 'UK mobile numbers, UK phrasing, and someone you can actually reach during your working day rather than a support queue eight hours behind.',
  },
  {
    q: 'Is it PECR and GDPR compliant?',
    a: 'Texting someone who hasn’t opted in is illegal here, and the fines land on your business, not your supplier. Ask how consent is recorded.',
  },
  {
    q: 'Does it handle a customer sending three messages in a row?',
    a: 'Real people fire off half a thought, then correct themselves. A system that only answers the first message reads as broken.',
  },
  {
    q: 'Does it know when to stop?',
    a: 'It should stop chasing when someone says they’re not interested, and hand over to you the moment a question goes beyond what it can answer.',
  },
  {
    q: 'Can you try it on your own enquiries before paying?',
    a: 'A free trial on your real leads, not a canned demo with someone else’s script.',
  },
];

// §7.11 fallback: single CTA block, not published tiers — no pricing figures exist yet.
// Adapted from the user's own drafted offer copy (vessant-site.html).
export const pricing = {
  eyebrow: 'The offer',
  headline: 'Two weeks on your live enquiries. Free.',
  body: 'We connect Vessant to your real enquiries and let it run. You watch every transcript and every booking as it happens.',
  bullets: [
    'No upfront cost, no card, no contract',
    'You see every conversation it has',
    "If it doesn't book you jobs, walk away",
  ],
  cta: 'Book a 15-minute call',
  note: "No pitch deck. We look at your enquiry flow and tell you honestly if this will pay for itself.",
};

export const faq = [
  {
    q: 'Will it sound like a robot to my customers?',
    a: 'No — it’s built to sound like your business, not a switchboard. It uses your tone and British phrasing, and it’s upfront that it’s automated if a customer asks directly. Most customers just care that someone replied fast.',
  },
  {
    q: "What happens if it can't answer something?",
    a: 'It says so, and hands over to you rather than guessing. You get the full conversation so you can pick it up with the context already in place.',
  },
  {
    q: 'Do I have to change my number?',
    a: 'No. Vessant plugs into the channels you already use — missed calls, your website form, texts — so your number and your customers’ habits stay the same.',
  },
  {
    q: 'What if I want to take the call myself?',
    a: 'Nothing stops you answering as normal. Vessant only picks up what you’d otherwise miss, and you can take any conversation over at any point.',
  },
  {
    q: 'Does it work on WhatsApp?',
    a: 'Yes — calls, texts, WhatsApp and web forms all land in the same inbox, so nothing depends on the customer picking the right channel.',
  },
  {
    q: 'What happens to my customers’ data?',
    a: 'It’s handled under UK GDPR and PECR, used only to run the conversation, and never used to train AI models. Full detail is in our ',
    linkText: 'privacy policy',
    linkHref: '/privacy',
  },
  {
    q: 'How long does setup take, and what do you need from me?',
    a: 'Typically under a week. We need your business name, how you like to sound, your working hours, and access to the enquiry channels you want covered — no new hardware or app to learn.',
  },
  {
    q: 'What does it cost, and can I cancel?',
    a: 'You get two weeks free on your real enquiries before anything is charged. There’s no long contract — if it’s not paying for itself, you walk away.',
  },
  {
    q: 'Is it actually UK-based?',
    a: 'Yes. Built in the UK, for UK trades, with a UK point of contact on UK hours — not a support queue eight hours behind.',
  },
];

export const finalCta = {
  line: 'The job goes to whoever replies first.',
  primary: `Ring the demo line: ${DEMO_NUMBER}`,
  secondary: 'Book a call',
};

export const footer = {
  tagline: 'AI receptionist for UK trades.',
  monoLine: 'UK-BUILT · LONDON',
  columns: [
    {
      heading: 'Site',
      links: [
        { label: 'How it works', href: '#how-it-works' },
        { label: "Who it's for", href: '#who-its-for' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Terms & conditions', href: '/terms' },
      ],
    },
  ],
};
