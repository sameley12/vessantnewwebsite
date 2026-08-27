// Single source of truth for the Vessant palette. Consumed by tailwind.config.js
// and by any JS that needs raw hex (canvas/SVG drawing can't use Tailwind classes).
export const colors = {
  navy: '#162254',
  navyDeep: '#0E1637',
  navy65: '#686F90',
  navy15: '#DCDEE5',
  navy06: '#F1F2F5',
  cyan: '#64D9EB',
  cyanDeep: '#23737F',
  cyan40: '#9AE6F2',
  cyan15: '#E8F9FC',
  white: '#FFFFFF',
};

export const radii = {
  card: '2rem',
  container: '3rem',
  footer: '4rem',
};

export const easing = {
  entrance: 'power3.out',
  morph: 'power2.inOut',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  button: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
};

export const stagger = {
  text: 0.08,
  cards: 0.15,
};

// Verified real Unsplash URLs (§2/§7.2/§7.8 — no placeholder images, ever).
// Checked to resolve with `curl -sI <url>` before being added here.
export const images = {
  // NOT currently used. Closest real match found for "van interior at dusk,
  // phone in cradle" was a car dashboard, not a liveried work van — reviewed
  // and rejected in favour of Hero.jsx's abstract gradient/signal-rings
  // treatment. Kept here in case a real van photo turns up later (§7.2's own
  // fallback: shoot four photos on a phone in a van).
  hero: 'https://images.unsplash.com/photo-1732538895957-25e8cd6a2f28?fm=jpg&q=60&w=1920&auto=format&fit=crop',
  // Close-up concrete wall texture — sits under a navy overlay at low opacity in
  // Manifesto.jsx, which is what darkens it; the source itself is mid-grey, not dark.
  manifestoTexture:
    'https://images.unsplash.com/photo-1750056661722-8381f9012079?q=80&w=1920&auto=format&fit=crop',
};
