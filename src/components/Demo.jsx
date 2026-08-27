import { Phone, MessageSquare } from 'lucide-react';
import { demo, DEMO_NUMBER, DEMO_NUMBER_TEL, DEMO_NUMBER_SMS } from '../content';
import DemoChat from './DemoChat';

export default function Demo() {
  return (
    <section id="demo" className="bg-navy-06 py-20 md:py-28" data-thread>
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-container border border-cyan-15 bg-cyan-15 p-6 md:p-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan-deep">
            Try it now
          </p>
          <h2 className="mt-3 max-w-2xl font-expanded text-2xl font-bold leading-snug text-navy md:text-4xl">
            Hear it answer.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center rounded-card border border-navy-15 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-cyan">
                <Phone size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-navy">{demo.callHeading}</h3>
              <p className="mt-2 text-navy-65">{demo.callSub}</p>
              <p className="mt-3 text-sm italic text-navy-65">{demo.callPrompt}</p>
              <a
                href={DEMO_NUMBER_TEL}
                className="btn-magnetic mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 font-mono text-lg font-bold text-white"
              >
                {DEMO_NUMBER}
              </a>
            </div>

            <div className="flex flex-col justify-center rounded-card border border-navy-15 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-cyan">
                <MessageSquare size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-navy">{demo.textHeading}</h3>
              <p className="mt-2 text-navy-65">{demo.textSub}</p>
              <p className="mt-3 text-sm italic text-navy-65">{demo.textPrompt}</p>
              <a
                href={DEMO_NUMBER_SMS}
                className="btn-magnetic mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-semibold text-navy md:hidden"
              >
                Text DEMO
              </a>
              <p className="mt-4 hidden text-sm text-navy-65 md:block">
                On desktop, try the demo agent below instead.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <DemoChat />
          </div>

          <p className="mt-8 text-center text-sm text-navy-65">{demo.footnote}</p>
        </div>
      </div>
    </section>
  );
}
