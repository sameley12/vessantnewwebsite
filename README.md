# Vessant marketing site

React 19 + Vite + Tailwind + GSAP build of the Vessant landing page, per
`../websitebuilder.md`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000 (or whatever port you pass with --port)
npm run build    # production build to dist/
npx vitest run   # unit tests (calculator formula, reduced-motion hook, phone-number constants)
```

## Where the copy lives

All page copy — headings, body text, the demo phone number, calculator
defaults — is in `src/content.js`. Change it there rather than in component
files; that's the single source of truth the spec's §9 asks for.

## What's a placeholder right now

- **Demo phone number** — `src/content.js` → `DEMO_NUMBER` /
  `DEMO_NUMBER_TEL` / `DEMO_NUMBER_SMS`. Currently `0800 000 0000`. Used
  everywhere `tel:`/`sms:` links appear (nav, hero, live demo, pricing,
  final CTA, footer). Replace all three constants once the real number is
  confirmed.
- **Pricing** — ships as the single CTA block (`src/components/Pricing.jsx`,
  copy in `content.js`'s `pricing` export), not three priced tiers, per
  spec §7.11's own fallback. Real tiers can replace it once pricing is set.
- **Legal entity details** — `[Vessant Ltd, company number [NUMBER],
  registered office [ADDRESS]]` appears, bracketed, in
  `src/components/Footer.jsx`, `src/pages/Privacy.jsx`, and
  `src/pages/Terms.jsx`. Fill these in once Vessant Ltd is incorporated and
  ICO-registered.
- **`og:image`** — `index.html` points at `/og-image.png`, which doesn't
  exist yet. Needs a real 1200×630 image (navy background, the V mark, the
  hero line, the demo number) — see spec §10.
- **Hero image** — closest real match found on Unsplash was a car dashboard
  at night with a phone visible, not a liveried work van specifically (see
  the comment in `src/lib/tokens.js`). Swap `images.hero` for a better shot
  if one turns up, or the spec's own fallback: shoot four photos on a phone
  in a real van.
- **§7.3 "cost of missed enquiry" statistics** — the three cited-stat row
  (share of callers who don't leave voicemail, etc.) was cut rather than
  invented, per the spec's own instruction. `CostSection.jsx` runs on the
  arithmetic statement + calculator only. Add real, sourced UK figures
  there if you find them.

## What's deliberately not wired up (needs your accounts, not code)

- GHL webhook for the live chat widget / contact forms — `DemoChat.jsx`
  runs in scripted mode (keyword-matched replies), same pattern as the
  existing `vessant-chat-widget.html` prototype. Point it at a real
  endpoint when the webhook exists.
- DNS repoint, hosting deploy (Cloudflare Pages / Netlify), and the 301s
  from the old GHL legal-page paths (`/privacy-policy-page`,
  `/terms-conditions`) to `/privacy` and `/terms`.
- MX records for `hello@vessant.co.uk`.
- The footer's "System Operational" badge was deliberately *not* built —
  there's no real health-check endpoint to point it at this session, and a
  hardcoded fake status badge is worse than none. It's a plain
  "UK-BUILT · LONDON" mono line instead (§7.14's own fallback).

## Architecture notes

- `src/lib/tokens.js` — colour/radius/easing/stagger tokens (also feeds
  `tailwind.config.js`) plus the verified real Unsplash image URLs.
- `src/lib/motion.js` — `useReducedMotion()`, the single reduced-motion
  flag every animated component checks.
- Contrast rule enforced throughout: cyan (`#64D9EB`) is text-safe on navy
  backgrounds only; light-background cyan-toned text uses `cyan-deep`
  (`#23737F`). Sections on a dark background carry an `on-navy` class so
  keyboard focus rings render in cyan there instead of the light-surface
  default.
- GSAP: `Protocol.jsx` and `Manifesto.jsx` each call
  `gsap.registerPlugin(ScrollTrigger)` at module scope — safe (GSAP
  deduplicates registration) and keeps each file usable in isolation.
  Pinning in `Protocol.jsx` is disabled under 768px and under reduced
  motion — the three steps render as a normal scroll instead.
