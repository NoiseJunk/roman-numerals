import React, { useState } from 'react';
import './App.css';
import EnterNumber from './components/EnterNumber';
import RomanNumeral from './components/RomanNumeral';
import romanNumeralGenerator from './utils/RomanNumeralGenerator';

function App() {
    const [result, setResult] = useState('');

    const handleNumberChange = (number) => {
        const convertedNumber = romanNumeralGenerator(number);
        // console.log('Input:', number, 'Output:', convertedNumber);
        setResult(convertedNumber);

    };

    return (
        <div className="App" role="application">
            <header className='Header'><h1>Roman Numeral Converter</h1></header>
            <main className='Main'>
                <RomanNumeral result={result} />
                <EnterNumber onNumberChange={handleNumberChange} />
            </main>
            <footer className='Footer'>
                <p>Built by Simon Middleton - Copyright &copy; MMXXV</p>
                <p>
                    <a href="https://github.com/NoiseJunk/roman-numerals" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </p>
            </footer>    
        </div>
    );
}

export default App; 