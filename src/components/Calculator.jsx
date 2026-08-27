import { useEffect, useRef, useState } from 'react';
import { calculator } from '../content';

const gbp0 = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });

function formatValue(field, value) {
  if (field.currency) return gbp0.format(value);
  if (field.percent) return `${value}%`;
  return String(value);
}

function useCountUp(target, delayMs = 250, durationMs = 600) {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const from = fromRef.current;
      const start = performance.now();
      function tick(now) {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - (1 - t) * (1 - t);
        setDisplay(Math.round(from + (target - from) * eased));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          fromRef.current = target;
        }
      }
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      clearTimeout(timeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return display;
}

// §7.7 formula, extracted so it's testable without rendering the component.
export function roiAnnualValue(missedPerWeek, jobValue, closeRate, recoveryRate = calculator.recoveryRate) {
  const recoverable = missedPerWeek * recoveryRate;
  const jobsWon = recoverable * closeRate;
  return Math.round(jobsWon * jobValue * 52);
}

export default function Calculator() {
  const [values, setValues] = useState(() =>
    Object.fromEntries(calculator.fields.map((f) => [f.key, f.default]))
  );

  const annualValue = roiAnnualValue(values.missed, values.value, values.close / 100);

  const displayValue = useCountUp(annualValue);

  return (
    <section id="calculator" className="bg-white py-20 md:py-28" data-thread>
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan-deep">
          Your numbers
        </p>
        <h2 className="mt-3 max-w-xl font-expanded text-2xl font-bold leading-snug text-navy md:text-4xl">
          What is it costing you?
        </h2>

        <div className="mt-12 grid gap-10 rounded-container border border-navy-15 bg-navy-06 p-6 md:grid-cols-2 md:p-12">
          <div className="flex flex-col justify-center gap-8">
            {calculator.fields.map((field) => (
              <div key={field.key}>
                <label htmlFor={`calc-${field.key}`} className="mb-3 block font-semibold text-navy">
                  {field.label}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id={`calc-${field.key}`}
                    type="range"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={values[field.key]}
                    aria-valuetext={formatValue(field, values[field.key])}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [field.key]: Number(e.target.value) }))
                    }
                    className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-navy-15 accent-navy"
                  />
                  <output
                    htmlFor={`calc-${field.key}`}
                    className="min-w-[76px] text-right font-mono text-lg font-bold text-navy"
                  >
                    {formatValue(field, values[field.key])}
                  </output>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center rounded-card bg-navy p-8 text-center text-white md:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan">
              {calculator.resultLabel}
            </p>
            <p className="mt-3 font-expanded text-4xl font-extrabold tabular-nums md:text-5xl">
              {gbp0.format(displayValue)}
            </p>
            <p className="mt-1 text-cyan-40">{calculator.resultSub}</p>
            <p className="mt-6 text-sm leading-relaxed text-white/70">{calculator.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
