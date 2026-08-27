import { useEffect, useRef, useState } from 'react';
import { Phone } from 'lucide-react';
import { nav, DEMO_NUMBER_TEL, DEMO_NUMBER } from '../content';
import logoUrl from '../assets/logo/vessant-logo-horizontal.svg';

// Morphs from transparent-on-hero to a frosted pill once the hero scrolls out of
// view. IntersectionObserver on a sentinel is cheaper than ScrollTrigger for this,
// per §7.1 of the build plan.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return undefined;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: '-72px 0px 0px 0px',
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-[background-color,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.65,0,0.35,1)]`}
      >
        <nav
          aria-label="Primary"
          className={[
            'flex w-full max-w-[860px] items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-[400ms]',
            scrolled
              ? 'border-navy-15 bg-white/60 text-navy shadow-[0_8px_30px_rgba(14,22,55,0.12)] backdrop-blur-xl'
              : 'on-navy border-white/0 bg-transparent text-white',
          ].join(' ')}
        >
          <a href="#hero" className="flex items-center gap-2 shrink-0" aria-label="Vessant home">
            <img
              src={logoUrl}
              alt="Vessant"
              className={`h-8 w-auto transition-[filter] duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`link-lift font-medium text-[15px] ${scrolled ? 'text-navy-65 hover:text-navy' : 'text-white/85 hover:text-white'}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={DEMO_NUMBER_TEL}
            className="btn-magnetic hidden shrink-0 items-center gap-2 rounded-full bg-cyan px-5 py-2.5 font-semibold text-navy md:inline-flex"
          >
            {nav.cta}
          </a>

          <a
            href={DEMO_NUMBER_TEL}
            aria-label={`Call the demo line, ${DEMO_NUMBER}`}
            className={`btn-magnetic flex h-11 w-11 shrink-0 items-center justify-center rounded-full md:hidden ${scrolled ? 'bg-navy text-white' : 'bg-cyan text-navy'}`}
          >
            <Phone size={20} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </nav>
      </header>
    </>
  );
}
