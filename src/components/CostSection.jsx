import { useEffect, useRef, useState } from 'react';
import { cost } from '../content';
import { useReducedMotion } from '../lib/motion';

function CountUp({ to, format, active }) {
  const [n, setN] = useState(active ? to : 0);
  useEffect(() => {
    if (!active) return undefined;
    const start = performance.now();
    const duration = 900;
    let raf;
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(to * (1 - (1 - t) * (1 - t))));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return <>{format(n)}</>;
}

export default function CostSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setActive(true);
      return undefined;
    }
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <section id="cost" ref={ref} className="bg-white py-20 md:py-28" data-thread>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-2xl font-semibold leading-snug text-navy md:text-4xl">
          Miss four calls a week. At an average job of{' '}
          <span className="font-bold text-cyan-deep">
            {active ? <CountUp to={340} format={(n) => `£${n}`} active={active} /> : '£0'}
          </span>
          , that's{' '}
          <span className="font-bold text-cyan-deep">
            {active ? <CountUp to={70720} format={(n) => `£${n.toLocaleString('en-GB')}`} active={active} /> : '£0'}
          </span>{' '}
          a year walking to whoever picks up second.
        </p>
        <p className="mx-auto mt-8 max-w-xl text-sm text-navy-65">{cost.note}</p>
      </div>
    </section>
  );
}
