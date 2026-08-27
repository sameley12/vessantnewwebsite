import { useEffect, useRef, useState } from 'react';
import { artifacts } from '../../content';

const DATA = artifacts[0];

// Card 1 — Diagnostic Shuffler. Three overlapping cards cycling vertically every
// 3s via array.unshift(array.pop()), spring-bounce easing. Only runs in viewport.
export default function Shuffler() {
  const [order, setOrder] = useState([0, 1, 2]);
  const containerRef = useRef(null);
  const reducedRef = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reducedRef.current) return undefined;
    let interval;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          interval = setInterval(() => {
            setOrder((prev) => {
              const next = [...prev];
              next.unshift(next.pop());
              return next;
            });
          }, 3000);
        } else if (interval) {
          clearInterval(interval);
        }
      },
      { threshold: 0.4 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (interval) clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex h-full flex-col">
      <h3 className="text-2xl font-semibold text-navy">{DATA.heading}</h3>
      <p className="mt-2 text-navy-65">{DATA.descriptor}</p>

      <div ref={containerRef} className="relative mt-6 h-[168px]" aria-hidden="true">
        {order.map((itemIndex, position) => {
          const item = DATA.items[itemIndex];
          return (
            <div
              key={itemIndex}
              className="absolute inset-x-0 rounded-2xl border border-navy-15 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(14,22,55,0.08)] transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                top: position * 14,
                transform: `scale(${1 - position * 0.045})`,
                opacity: position === 2 ? 0 : 1,
                zIndex: 10 - position,
              }}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-deep">
                <span>{item.channel}</span>
                <span>{item.time}</span>
              </div>
              <p className="mt-2 text-[15px] font-medium text-navy">{item.detail}</p>
            </div>
          );
        })}
      </div>

      {/* Screen-reader equivalent — the shuffling cards are decorative motion, this is the content. */}
      <ul className="sr-only">
        {DATA.items.map((item) => (
          <li key={item.channel}>
            {item.channel}: {item.detail} at {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
