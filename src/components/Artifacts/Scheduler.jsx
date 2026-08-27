import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { artifacts } from '../../content';

const DATA = artifacts[2];
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const TARGET_DAY = 4; // Thursday
const CELL = 40;
const GAP = 8;

export default function Scheduler() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const saveRef = useRef(null);
  const gridRef = useRef(null);
  const [active, setActive] = useState(false);
  const reducedRef = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reducedRef.current) {
      setActive(true);
      return undefined;
    }

    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;
      const gridEl = gridRef.current;
      const saveEl = saveRef.current;
      if (!cursor || !gridEl || !saveEl) return;

      const cellCenterX = TARGET_DAY * (CELL + GAP) + CELL / 2;
      const cellCenterY = CELL / 2;
      const saveRect = { x: saveEl.offsetLeft + saveEl.offsetWidth / 2, y: saveEl.offsetTop + saveEl.offsetHeight / 2 };
      const startX = gridEl.offsetWidth + 30;
      const startY = -20;

      function runLoop() {
        setActive(false);
        gsap.set(cursor, { x: startX, y: startY, opacity: 0 });
        const tl = gsap.timeline({
          delay: 0.4,
          onComplete: () => {
            tl.time(0);
            setTimeout(runLoop, 2000);
          },
        });
        tl.to(cursor, { opacity: 1, duration: 0.3 })
          .to(cursor, { x: cellCenterX, y: cellCenterY, duration: 1, ease: 'power2.inOut' })
          .to(cursor, { scale: 0.85, duration: 0.12, ease: 'power1.out' })
          .to(cursor, { scale: 1, duration: 0.15, ease: 'back.out(3)' })
          .call(() => setActive(true))
          .to(cursor, { x: saveRect.x, y: saveRect.y, duration: 0.9, ease: 'power2.inOut' }, '+=0.3')
          .to(cursor, { scale: 0.85, duration: 0.12, ease: 'power1.out' })
          .to(cursor, { scale: 1, duration: 0.15, ease: 'back.out(3)' })
          .to(cursor, { opacity: 0, duration: 0.4, delay: 0.4 });
      }

      let running = false;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !running) {
            running = true;
            runLoop();
          } else if (!entry.isIntersecting) {
            running = false;
            gsap.killTweensOf(cursor);
          }
        },
        { threshold: 0.4 }
      );
      if (containerRef.current) observer.observe(containerRef.current);

      return () => observer.disconnect();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex h-full flex-col" ref={containerRef}>
      <h3 className="text-2xl font-semibold text-navy">{DATA.heading}</h3>
      <p className="mt-2 text-navy-65">{DATA.descriptor}</p>

      <div className="relative mt-6 flex-1" aria-hidden="true">
        <div ref={gridRef} className="flex gap-2">
          {DAYS.map((d, i) => (
            <div
              key={`${d}-${i}`}
              className={[
                'flex h-10 w-10 items-center justify-center rounded-lg border font-mono text-[13px] font-bold transition-colors duration-300',
                i === TARGET_DAY && active
                  ? 'border-cyan-deep bg-cyan-15 text-navy'
                  : 'border-navy-15 bg-white text-navy-65',
              ].join(' ')}
            >
              {d}
            </div>
          ))}
        </div>

        <button
          ref={saveRef}
          type="button"
          tabIndex={-1}
          className="btn-magnetic mt-6 rounded-full bg-navy px-5 py-2 text-[13px] font-semibold text-white"
        >
          Save
        </button>

        <div
          ref={cursorRef}
          className="pointer-events-none absolute left-0 top-0 opacity-0"
          style={{ willChange: 'transform' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2L18 9L10 11L8 18L2 2Z" fill="#162254" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <p className="sr-only">Thursday selected and saved to your calendar.</p>
    </div>
  );
}
