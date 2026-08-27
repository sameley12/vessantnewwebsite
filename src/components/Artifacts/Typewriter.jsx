import { useEffect, useRef, useState } from 'react';
import { artifacts } from '../../content';

const DATA = artifacts[1];
const CHAR_MS = 35;
const HOLD_MS = 4000;

export default function Typewriter() {
  const [shown, setShown] = useState('');
  const containerRef = useRef(null);
  const reducedRef = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reducedRef.current) {
      setShown(DATA.message);
      return undefined;
    }

    let timeoutId;
    let active = false;

    function cycle() {
      let i = 0;
      setShown('');
      function typeNext() {
        if (!active) return;
        i += 1;
        setShown(DATA.message.slice(0, i));
        if (i < DATA.message.length) {
          timeoutId = setTimeout(typeNext, CHAR_MS);
        } else {
          timeoutId = setTimeout(() => {
            if (active) cycle();
          }, HOLD_MS);
        }
      }
      typeNext();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !active) {
          active = true;
          cycle();
        } else if (!entry.isIntersecting && active) {
          active = false;
          clearTimeout(timeoutId);
        }
      },
      { threshold: 0.4 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      active = false;
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex h-full flex-col" ref={containerRef}>
      <h3 className="text-2xl font-semibold text-navy">{DATA.heading}</h3>
      <p className="mt-2 text-navy-65">{DATA.descriptor}</p>

      <div className="mt-6 flex-1 rounded-2xl border border-navy-15 bg-navy-deep p-5">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-40">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          LIVE
        </div>

        <p aria-hidden="true" className="mt-4 font-mono text-[14px] leading-relaxed text-cyan-40">
          <span className="text-white/40">&gt; </span>
          {shown}
          <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan align-middle" style={{ height: '1em' }} />
        </p>

        {/* Screen-reader equivalent — static text of the same message, per §11 accessibility floor. */}
        <p className="sr-only">{DATA.message}</p>
      </div>
    </div>
  );
}
