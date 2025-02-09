import React from 'react';
import styles from './EnterNumber.module.css';

function EnterNumber({ onNumberChange }) {
    const [number, setNumber] = React.useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        
        // Allow empty input and clear result
        if (inputValue === '') {
            setNumber('');
            onNumberChange(''); // Changed to pass empty string instead of 1
            return;
        }

        // Apply limits for actual numbers
        const value = Math.min(Math.max(inputValue, 1), 3999);
        setNumber(value);
        onNumberChange(Number(value));
    };

    return (
        <div className={styles.container}>
            <label htmlFor="number" className={styles.label}>Please enter a number between <span className={styles.highlight}>1 and 3999</span> to convert to Roman Numerals</label>
            <input
                type="number"
                min="1"
                max="3999"
                placeholder="Enter a number:-"
                className={styles.input}
                value={number}
                onChange={handleChange}
            />
        </div>
    );
}

export default EnterNumber;
