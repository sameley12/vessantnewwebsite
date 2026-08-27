// Global CSS noise overlay via inline SVG feTurbulence, per the master prompt's
// texture rule. Fixed, above surfaces, below content, never intercepts input.
export default function NoiseOverlay({ hero = false }) {
  return (
    <div
      aria-hidden="true"
      className={`noise-overlay ${hero ? 'noise-overlay--hero' : ''}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
