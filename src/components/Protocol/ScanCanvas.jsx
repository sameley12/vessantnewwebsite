import { useEffect, useRef } from 'react';
import { colors } from '../../lib/tokens';

// Step 2 — scanning horizontal laser line traversing a grid of dots, each dot
// lighting as the line crosses it.
export default function ScanCanvas({ active, reduced }) {
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

    const cols = 9;
    const rows = 9;
    const pad = 30;
    const step = (size - pad * 2) / (cols - 1);

    function draw(t) {
      ctx.clearRect(0, 0, size, size);
      const cyclePos = reduced ? 0.5 : (t / 2200) % 1;
      const scanY = pad + cyclePos * (size - pad * 2);

      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const x = pad + c * step;
          const y = pad + r * step;
          const lit = reduced ? true : y < scanY;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = lit ? colors.cyan : 'rgba(255,255,255,0.18)';
          ctx.fill();
        }
      }

      if (!reduced) {
        ctx.beginPath();
        ctx.moveTo(pad - 8, scanY);
        ctx.lineTo(size - pad + 8, scanY);
        ctx.strokeStyle = colors.cyan;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.85;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
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
