import { finalCta, DEMO_NUMBER_TEL } from '../content';

// §7.13 — minimal, no form. The form lives on the booking page, not here.
export default function FinalCta() {
  return (
    <section className="on-navy bg-navy-deep px-6 py-28 text-center md:px-12">
      <h2 className="font-expanded mx-auto max-w-3xl text-[26px] leading-snug text-white md:text-[42px]">
        {finalCta.line}
      </h2>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href={DEMO_NUMBER_TEL}
          className="btn-magnetic rounded-full bg-cyan px-7 py-4 text-lg font-semibold text-navy"
        >
          {finalCta.primary}
        </a>
        <a
          href="#pricing"
          className="btn-magnetic rounded-full border border-white/30 px-7 py-4 font-semibold text-white"
        >
          {finalCta.secondary}
        </a>
      </div>
    </section>
  );
}
