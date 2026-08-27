import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { checklist } from '../content';

function Row({ item, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border bg-navy-06 transition-colors ${isOpen ? 'border-l-[3px] border-l-cyan border-navy-15' : 'border-navy-15'}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-stretch text-left"
      >
        <span className="flex flex-1 items-center gap-3 px-5 py-4 text-[16px] font-medium text-navy">
          <span className="flex-1">{item.q}</span>
          <ChevronDown
            size={16}
            className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </span>
        <span className="flex w-16 shrink-0 items-center justify-center border-l border-navy-15">
          <Check size={20} className="text-navy" aria-label="Included" />
        </span>
      </button>
      {isOpen && <div className="px-5 pb-4 pr-[92px] text-[15px] leading-relaxed text-navy-65">{item.a}</div>}
    </div>
  );
}

export default function Checklist() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="checklist" className="bg-white py-20 md:py-28" data-thread>
      <div className="mx-auto max-w-[760px] px-6">
        <div className="flex items-end justify-between pb-4">
          <h2 className="text-2xl font-semibold text-navy">Criteria</h2>
        </div>
        <div className="space-y-2.5">
          {checklist.map((item, i) => (
            <Row
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
