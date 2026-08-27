import { useEffect, useRef, useState } from 'react';

// The signature element (§3.5): a vertical rail tracking scroll position, with
// four nodes narrating the product in real time. Collapses to a bare progress
// rail on mobile — no timestamps, per spec.
const NODES = [
  { at: 0.08, time: '09:41', label: 'missed call' },
  { at: 0.31, time: '09:41', label: 'auto-reply sent' },
  { at: 0.46, time: '09:42', label: 'customer replies' },
  { at: 0.9, time: '09:43', label: 'job booked — Thu 14:00' },
];

export default function Thread() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    function update() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, p)));
      ticking.current = false;
    }
    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile: 2px progress rail, no timestamps */}
      <div className="fixed inset-x-0 top-0 z-40 h-[2px] bg-navy-15 lg:hidden" aria-hidden="true">
        <div className="h-full bg-cyan transition-[width]" style={{ width: `${progress * 100}%` }} />
      </div>

      {/* Desktop: vertical rail in the left gutter with narrative nodes */}
      <div
        className="pointer-events-none fixed left-6 top-24 bottom-24 z-40 hidden w-px lg:block"
        aria-hidden="true"
      >
        <div className="relative h-full w-px bg-navy-15/60">
          <div
            className="absolute left-0 top-0 w-px bg-cyan transition-[height] duration-150"
            style={{ height: `${progress * 100}%` }}
          />
          {NODES.map((node) => {
            const lit = progress >= node.at;
            return (
              <div
                key={node.label}
                className="absolute left-0 flex -translate-x-1/2 items-center"
                style={{ top: `${node.at * 100}%` }}
              >
                <span
                  className={`block h-2 w-2 rounded-full transition-colors ${lit ? 'bg-cyan' : 'bg-navy-15'}`}
                />
                <span
                  className={`ml-3 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.1em] transition-opacity duration-300 ${lit ? 'opacity-100 text-cyan-deep' : 'opacity-0'}`}
                >
                  {node.time} {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
