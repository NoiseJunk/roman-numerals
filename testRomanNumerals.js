import romanNumeralGenerator from './src/utils/RomanNumeralGenerator.js';

// Test cases
const testCases = [
    { input: 1, expected: 'I' },
    { input: 4, expected: 'IV' },
    { input: 9, expected: 'IX' },
    { input: 49, expected: 'XLIX' },
    { input: 99, expected: 'XCIX' },
    { input: 499, expected: 'CDXCIX' },
    { input: 999, expected: 'CMXCIX' },
    { input: 3999, expected: 'MMMCMXCIX' },
    { input: '', expected: '' },
    { input: 4000, expected: '' }, // Should return empty string due to validation
];

// Run tests
testCases.forEach(({ input, expected }) => {
    const result = romanNumeralGenerator(input);
    const passed = result === expected;
    console.log(
        `Input: ${input}\t`,
        `Expected: ${expected}\t`,
        `Got: ${result}\t`,
        passed ? '✅ PASSED' : '❌ FAILED'
    );
}); 