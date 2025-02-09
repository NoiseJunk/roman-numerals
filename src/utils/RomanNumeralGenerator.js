// Roman Numeral Generator
const romanNumeralGenerator = (number) => {
    // Allow empty input to pass through
    if (number === '' || number === null) {
        return '';
    }
    
    // Validate input range
    if (!Number.isInteger(number) || number < 1 || number > 3999) {
        return '';
    }

    // Convert number to string
    const numStr = number.toString();
    
    // return number * 2;

    const romanNumeralUnits = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
    };

    const romanNumeralTens = {
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXXX',
        9: 'XC',
    };

    const romanNumeralHundreds = {
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM',
    };

    const romanNumeralThousands = {
        1: 'M',
        2: 'MM',
        3: 'MMM',
    };

    if (numStr.length === 1) {
        return romanNumeralUnits[numStr] || '';
    } else if (numStr.length === 2) {
        return (romanNumeralTens[numStr[0]] || '') + (romanNumeralUnits[numStr[1]] || '');
    } else if (numStr.length === 3) {
        return (romanNumeralHundreds[numStr[0]] || '') + (romanNumeralTens[numStr[1]] || '') + (romanNumeralUnits[numStr[2]] || '');
    } else if (numStr.length === 4) {
        return (romanNumeralThousands[numStr[0]] || '') + (romanNumeralHundreds[numStr[1]] || '') + (romanNumeralTens[numStr[2]] || '') + (romanNumeralUnits[numStr[3]] || '');
    }
    return ''; // Add default return for invalid inputs
};

export default romanNumeralGenerator;