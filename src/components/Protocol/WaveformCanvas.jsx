import { useEffect, useRef } from 'react';
import { colors } from '../../lib/tokens';

// Step 3 — pulsing EKG-style waveform via stroke-dashoffset, resolving into a
// flat confirmed line.
export default function WaveformCanvas({ active, reduced }) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = 320;
    const h = 160;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const midY = h / 2;

    function pathY(x, settled) {
      if (settled) return midY;
      const spike = Math.sin(x / 9) * 6;
      const beat = x % 80 < 6 ? -(6 - (x % 80)) * 8 : 0;
      return midY + spike * 0.3 + beat;
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      const cyclePos = reduced ? 1 : (t / 3200) % 1;
      const settleFrom = w * 0.55;

      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const drawnUpTo = reduced ? w : cyclePos * w * 2;
        if (x > drawnUpTo) break;
        const settled = x > settleFrom;
        const y = pathY(x, settled);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.stroke();
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

  return <canvas ref={ref} className="h-full w-full" style={{ maxWidth: 320, maxHeight: 160 }} aria-hidden="true" />;
}
