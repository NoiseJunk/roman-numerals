import romanNumeralGenerator from '../RomanNumeralGenerator';

describe('RomanNumeralGenerator', () => {
  // Basic functionality tests
  test.each([
    [1, 'I'],
    [4, 'IV'],
    [9, 'IX'],
    [49, 'XLIX'],
    [99, 'XCIX'],
    [499, 'CDXCIX'],
    [999, 'CMXCIX'],
    [3999, 'MMMCMXCIX']
  ])('converts %i to %s', (input, expected) => {
    expect(romanNumeralGenerator(input)).toBe(expected);
  });

  // Edge cases and validation
  describe('input validation', () => {
    test('returns empty string for numbers below 1', () => {
      expect(romanNumeralGenerator(0)).toBe('');
      expect(romanNumeralGenerator(-1)).toBe('');
    });

    test('returns empty string for numbers above 3999', () => {
      expect(romanNumeralGenerator(4000)).toBe('');
    });

    test('handles non-numeric inputs', () => {
      expect(romanNumeralGenerator('')).toBe('');
      expect(romanNumeralGenerator('abc')).toBe('');
      expect(romanNumeralGenerator(null)).toBe('');
      expect(romanNumeralGenerator(undefined)).toBe('');
    });
  });

  // Performance tests
  describe('performance', () => {
    test('handles 1000 conversions under 100ms', () => {
      const start = performance.now();
      for (let i = 1; i <= 1000; i++) {
        romanNumeralGenerator(i);
      }
      const end = performance.now();
      const duration = end - start;
      
      expect(duration).toBeLessThan(100);
    });
  });
}); 