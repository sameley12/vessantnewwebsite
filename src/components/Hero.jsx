import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { hero, DEMO_NUMBER_TEL, DEMO_NUMBER_SMS } from '../content';
import { useReducedMotion } from '../lib/motion';

// §7.2 — full-bleed opening shot. Stagger fires once on mount, resolves
// instantly to final state under reduced motion. `id="hero"` is the sentinel
// Nav.jsx observes to trigger its morph.
export default function Hero() {
  const reduced = useReducedMotion();
  const rootRef = useRef(null);

  useEffect(() => {
    const items = rootRef.current.querySelectorAll('[data-hero-item]');
    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return undefined;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' }
      );
    }, rootRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="on-navy relative flex min-h-dvh items-end overflow-hidden bg-navy-deep"
    >
      {/* Abstract dark texture — no stock photo could honestly show a UK trade
          van interior, so the hero leans on the brand's own signal motif
          (echoed later in the Protocol section's rings animation) instead. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 900px 700px at 85% 8%, rgba(100,217,235,0.16), transparent 60%),' +
            'radial-gradient(ellipse 700px 600px at 15% 95%, rgba(100,217,235,0.08), transparent 65%),' +
            'linear-gradient(180deg, #0E1637 0%, #162254 55%, #0E1637 100%)',
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute right-[-8%] top-[-12%] h-[70%] w-[70%] max-w-[720px] opacity-[0.15] md:opacity-[0.22]"
        viewBox="0 0 400 400"
      >
        {[60, 110, 160, 210].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#64D9EB" strokeWidth="1" />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

      <div className="relative-content max-w-4xl px-6 pb-20 pt-40 md:px-14 md:pb-28">
        <p data-hero-item className="font-data text-cyan mb-4">
          {hero.eyebrow}
        </p>
        <h1 className="font-sans font-semibold leading-[1.1] text-white">
          <span
            data-hero-item
            className="block text-[clamp(22px,3.4vw,40px)]"
          >
            {hero.line1}
          </span>
          <span
            data-hero-item
            className="font-expanded mt-1 block leading-[1.05] text-[clamp(40px,8.5vw,116px)]"
          >
            {hero.line2}
          </span>
        </h1>
        <p data-hero-item className="mt-6 max-w-xl text-base text-white/90 md:text-lg">
          {hero.sub}
        </p>
        <div data-hero-item className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={DEMO_NUMBER_TEL}
            className="btn-magnetic inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3.5 font-semibold text-navy"
          >
            {hero.cta}
          </a>
          <a href={DEMO_NUMBER_SMS} className="link-lift text-cyan underline underline-offset-4">
            {hero.secondary}
          </a>
        </div>
        <p data-hero-item className="font-data mt-6 text-white/70">
          {hero.trust}
        </p>
      </div>
    </section>
  );
}
