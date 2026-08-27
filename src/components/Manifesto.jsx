import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { manifesto } from '../content';
import { images } from '../lib/tokens';
import { useReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger);

// §7.8 — the manifesto. Texture image sits at low opacity under a navy wash;
// line-by-line fade-up on scroll, skipped entirely under reduced motion.
export default function Manifesto() {
  const reduced = useReducedMotion();
  const rootRef = useRef(null);

  useEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-line]',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 70%' },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-navy-deep px-6 py-32 md:px-12">
      <img
        src={images.manifestoTexture}
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-navy-deep/70" aria-hidden="true" />
      <div className="relative-content mx-auto max-w-3xl text-center">
        <p data-line className="text-sm text-white/60">
          {manifesto.small}
        </p>
        <p className="font-expanded mt-6 text-[26px] leading-snug text-white md:text-[42px]">
          {manifesto.drama.map((line) => (
            <span data-line key={line} className="block">
              {line === manifesto.drama[manifesto.drama.length - 1] ? (
                <>
                  {line.split(manifesto.highlight)[0]}
                  <span className="text-cyan">{manifesto.highlight}</span>
                  {line.split(manifesto.highlight)[1]}
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
