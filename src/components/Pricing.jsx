import { pricing, DEMO_NUMBER_TEL } from '../content';

// §7.11 fallback: single large-format CTA block, not published tiers.
export default function Pricing() {
  return (
    <section id="pricing" className="on-navy bg-navy-deep py-20 md:py-28" data-thread>
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-container bg-navy p-8 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rotate-[8deg] opacity-[0.18]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-55deg, #64D9EB 0 8px, transparent 8px 26px)',
            }}
          />
          <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan">
                {pricing.eyebrow}
              </p>
              <h2 className="mt-3 font-expanded text-2xl font-bold leading-snug text-white md:text-4xl">
                {pricing.headline}
              </h2>
              <p className="mt-4 max-w-md text-white/70">{pricing.body}</p>
              <ul className="mt-6 space-y-2.5">
                {pricing.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-white/85">
                    <span className="mt-1.5 h-2 w-3 shrink-0 rotate-[-45deg] border-b-2 border-l-2 border-cyan" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="font-expanded text-4xl font-extrabold text-cyan md:text-5xl">£0</p>
              <p className="mt-1.5 text-white/70">for your first two weeks</p>
              <a
                href={DEMO_NUMBER_TEL}
                className="btn-magnetic mt-6 inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 font-semibold text-navy"
              >
                {pricing.cta}
              </a>
              <p className="mt-4 text-xs leading-relaxed text-white/60">{pricing.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
