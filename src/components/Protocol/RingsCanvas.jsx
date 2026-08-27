import { useEffect, useRef } from 'react';
import { colors } from '../../lib/tokens';

// Step 1 — concentric rings pulsing outward, slow rotation.
export default function RingsCanvas({ active, reduced }) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 320;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    function draw(t) {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;
      const ringCount = 4;
      for (let i = 0; i < ringCount; i += 1) {
        const phase = reduced ? 0.6 : ((t / 2600 + i / ringCount) % 1);
        const radius = 20 + phase * 120;
        const alpha = 1 - phase;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = colors.cyan;
        ctx.globalAlpha = Math.max(alpha * 0.7, 0);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = colors.cyan;
      ctx.fill();
    }

    if (reduced || !active) {
      draw(0);
      return undefined;
    }

    function loop(t) {
      draw(t);
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, reduced]);

  return <canvas ref={ref} className="h-full w-full" style={{ maxWidth: 320, maxHeight: 320 }} aria-hidden="true" />;
}
