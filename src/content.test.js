import { describe, it, expect } from 'vitest';
import { DEMO_NUMBER, DEMO_NUMBER_TEL, DEMO_NUMBER_SMS } from './content';

describe('demo number constants', () => {
  it('tel: href digits match the displayed number, in E.164', () => {
    const displayDigits = DEMO_NUMBER.replace(/\D/g, ''); // "08000000000"
    const e164 = `+44${displayDigits.slice(1)}`;
    expect(DEMO_NUMBER_TEL).toBe(`tel:${e164}`);
  });

  it('sms: href points at the same number and carries a DEMO body', () => {
    const displayDigits = DEMO_NUMBER.replace(/\D/g, '');
    const e164 = `+44${displayDigits.slice(1)}`;
    expect(DEMO_NUMBER_SMS).toBe(`sms:${e164}?body=DEMO`);
  });
});
