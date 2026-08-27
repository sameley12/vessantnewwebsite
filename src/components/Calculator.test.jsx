import { describe, it, expect } from 'vitest';
import { roiAnnualValue } from './Calculator';

describe('roiAnnualValue', () => {
  it('matches the spec worked example: 6 missed/week, £340 job, 40% close, 0.5 recovery', () => {
    // recoverable = 6 * 0.5 = 3/week; jobs_won = 3 * 0.4 = 1.2/week; annual = 1.2 * 340 * 52
    expect(roiAnnualValue(6, 340, 0.4, 0.5)).toBe(Math.round(1.2 * 340 * 52));
  });

  it('is zero when nothing is missed', () => {
    expect(roiAnnualValue(0, 340, 0.4, 0.5)).toBe(0);
  });

  it('defaults recovery rate to the spec-mandated 0.5 when not passed', () => {
    expect(roiAnnualValue(6, 340, 0.4)).toBe(roiAnnualValue(6, 340, 0.4, 0.5));
  });
});
