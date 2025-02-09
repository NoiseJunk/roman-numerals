/**
 * Converts a number to Roman numerals
 * @param {number} number - The number to convert (1-3999)
 * @returns {string} The Roman numeral representation or empty string if invalid
 */
const romanNumeralGenerator = (number) => {
    // Input validation
    if (!number || typeof number !== 'number' || number < 1 || number > 3999) {
        return '';
    }

    // Using a Map for better maintainability and slightly better performance
    // than object literals due to guaranteed insertion order
    const romanNumerals = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);

    let result = '';
    
    // Using for...of instead of forEach for better performance
    for (const [value, numeral] of romanNumerals) {
        // Using while loop for better performance than division/modulo
        while (number >= value) {
            result += numeral;
            number -= value;
        }
    }

    return result;
};

export default romanNumeralGenerator;