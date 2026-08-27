import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faq } from '../content';

// §7.12 — objection handling + SEO surface. FAQPage structured data injected
// alongside the visible accordion so search engines and the page agree.
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a + (f.linkText ? ` (see ${f.linkText})` : '') },
    })),
  };

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[760px] px-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan-deep">
          Questions
        </p>
        <h2 className="mt-3 font-expanded text-2xl font-bold leading-snug text-navy md:text-4xl">
          Before you call.
        </h2>

        <div className="mt-10 divide-y divide-navy-15 border-t border-navy-15">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-navy"
                >
                  {item.q}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-[15px] leading-relaxed text-navy-65">
                    {item.a}
                    {item.linkText && (
                      <>
                        <a href={item.linkHref} className="text-cyan-deep underline">
                          {item.linkText}
                        </a>
                        .
                      </>
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
