import { Mail, Phone } from 'lucide-react';
import { footer, CONTACT_EMAIL, DEMO_NUMBER, DEMO_NUMBER_TEL } from '../content';
import logoUrl from '../assets/logo/vessant-logo-horizontal.svg';

// §7.14 — no fabricated "System Operational" badge: this session has no real
// health-check endpoint to point it at, so the footer carries the spec's own
// truthful fallback (a plain mono line) instead of a fake live status.
export default function Footer() {
  return (
    <footer className="on-navy rounded-t-footer bg-navy-deep px-6 py-16 text-white/70 md:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-10 border-b border-white/10 pb-10 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Vessant" className="h-7 w-auto brightness-0 invert" />
            <span className="font-data text-white/50">{footer.monoLine}</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-3" aria-label="Footer">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <p className="font-data mb-2 text-white/40">{col.heading}</p>
                <ul className="space-y-1.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link-lift text-sm text-white/80 hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-cyan hover:text-cyan-40">
              <Mail size={16} aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
            <a href={DEMO_NUMBER_TEL} className="flex items-center gap-2 text-cyan hover:text-cyan-40">
              <Phone size={16} aria-hidden="true" /> {DEMO_NUMBER}
            </a>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="mb-3">&copy; 2026 Vessant. All rights reserved.</p>
          <p className="text-xs leading-relaxed text-white/40">
            [Vessant Ltd, registered in England and Wales. Company no. [NUMBER].]
            <br />
            [Registered office: address line, town, postcode.]
          </p>
        </div>
      </div>
    </footer>
  );
}
