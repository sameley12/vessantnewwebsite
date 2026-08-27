import { useEffect, useState } from 'react';
import { easing, stagger } from './tokens';

const QUERY = '(prefers-reduced-motion: reduce)';

// Single source of truth for the reduced-motion flag — checked once per component,
// not per-animation, per §5 of the build plan.
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = (e) => setReduced(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export { easing, stagger };
