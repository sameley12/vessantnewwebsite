import { useRef, useState } from 'react';

// Scripted demo agent — mirrors the GHL prototype (vessant-chat-widget.html) in
// scripted mode, so the section works with no backend wired up yet. Replace
// SCRIPT/handle() with a real endpoint once the webhook exists (§9 migration).
const GREETING =
  "You're talking to Vessant's demo agent. Tell it about a job — say your boiler's making a noise and see what happens.";
const CHIPS = ['My boiler is making a noise', 'How much for a callout?', 'Are you a real person?'];
const SCRIPT = [
  { match: /boiler|heating|leak|roof|tile|water|noise/i, reply: 'Sorry to hear that — we can get someone out quickly. Whereabouts are you, and is tomorrow morning any good?' },
  { match: /how much|cost|price|quote/i, reply: "It depends on the job, so I won't guess. I can get someone out to look and quote properly — what's your postcode?" },
  { match: /real person|human|are you (a )?bot|ai/i, reply: "I'm an automated assistant. I can answer questions and book you in, and a person will pick it up from there." },
  { match: /.*/, reply: "Got it. What's the job, and whereabouts are you?" },
];

function scriptedReply(text) {
  return SCRIPT.find((s) => s.match.test(text)).reply;
}

export default function DemoChat() {
  const [log, setLog] = useState([{ role: 'bot', text: GREETING }]);
  const [typing, setTyping] = useState(false);
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(0);
  const logRef = useRef(null);

  function scrollToEnd() {
    requestAnimationFrame(() => {
      if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
    });
  }

  function handle(text) {
    if (!text.trim() || typing || sent >= 12) return;
    setSent((s) => s + 1);
    setLog((l) => [...l, { role: 'user', text }]);
    setValue('');
    setTyping(true);
    scrollToEnd();
    setTimeout(() => {
      setLog((l) => [...l, { role: 'bot', text: scriptedReply(text) }]);
      setTyping(false);
      scrollToEnd();
    }, 700 + Math.random() * 600);
  }

  return (
    <div className="flex h-[440px] flex-col overflow-hidden rounded-card border border-navy-15 bg-white shadow-[0_20px_50px_rgba(14,22,55,0.1)]">
      <div className="flex items-center gap-3 bg-navy px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan font-mono text-sm font-bold text-navy">
          V
        </div>
        <div>
          <p className="text-sm font-bold text-white">Vessant demo agent</p>
          <p className="text-[11px] text-cyan-40">This is what your customer would talk to</p>
        </div>
      </div>

      <div ref={logRef} className="flex-1 space-y-3 overflow-y-auto p-5" role="log" aria-live="polite" aria-label="Demo conversation">
        {log.map((m, i) => (
          <div
            key={i}
            className={[
              'max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
              m.role === 'bot' ? 'self-start bg-navy-06 text-navy' : 'ml-auto bg-navy text-white',
            ].join(' ')}
          >
            {m.text}
          </div>
        ))}
        {typing && (
          <div className="flex w-fit gap-1 rounded-2xl bg-navy-06 px-4 py-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-65"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 px-5 pb-3">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => handle(c)}
            className="rounded-full border border-navy-15 px-3 py-1.5 text-xs font-semibold text-cyan-deep hover:border-cyan-deep"
          >
            {c}
          </button>
        ))}
      </div>

      <form
        className="flex gap-2 border-t border-navy-15 px-4 py-3"
        onSubmit={(e) => {
          e.preventDefault();
          handle(value);
        }}
      >
        <label htmlFor="vsDemoInput" className="sr-only">
          Type a message to the demo agent
        </label>
        <input
          id="vsDemoInput"
          type="text"
          maxLength={300}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tell it about a job…"
          className="flex-1 rounded-full border border-navy-15 px-4 py-2 text-sm text-navy outline-none focus-visible:border-cyan-deep"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="btn-magnetic flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white disabled:bg-navy-15"
          disabled={typing}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M3 20l18-8L3 4v6l12 2-12 2z" fill="currentColor" />
          </svg>
        </button>
      </form>
      <p className="px-5 pb-3 text-center text-[11px] text-navy-65">
        Sample conversation. Nothing you type here is used to contact you.
      </p>
    </div>
  );
}
