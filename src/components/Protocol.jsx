import { useEffect, useRef, useState } from 'react';
import { protocol } from '../content';
import { useReducedMotion } from '../lib/motion';
import RingsCanvas from './Protocol/RingsCanvas';
import ScanCanvas from './Protocol/ScanCanvas';
import WaveformCanvas from './Protocol/WaveformCanvas';

const CANVASES = [RingsCanvas, ScanCanvas, WaveformCanvas];

function Panel({ step, index, Canvas, isLast, reduced }) {
  const panelRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0.5,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={isLast ? '' : 'md:h-[160vh]'} data-thread={index === 0 ? true : undefined}>
      <div
        ref={panelRef}
        className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-navy-deep px-6 py-20 text-white md:sticky md:top-0 md:min-h-0 md:h-screen"
      >
        <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-sm font-bold text-cyan-40">{step.n}</p>
            <h3 className="mt-3 font-expanded text-2xl font-bold leading-snug md:text-3xl">{step.title}</h3>
            <p className="mt-4 max-w-md text-lg text-white/70">
              {step.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div className="flex justify-center">
            <Canvas active={active} reduced={reduced} />
          </div>
        </div>
      </div>
    </div>
  );
}

// §7.5 — sticky stacking archive. Pinning disabled under 768px and reduced-motion,
// where the three steps stack as normal scroll blocks instead.
export default function Protocol() {
  const reduced = useReducedMotion();

  return (
    <section id="how-it-works" className="bg-navy-deep">
      {protocol.map((step, i) => (
        <Panel
          key={step.n}
          step={step}
          index={i}
          Canvas={CANVASES[i]}
          isLast={i === protocol.length - 1}
          reduced={reduced}
        />
      ))}
    </section>
  );
}
