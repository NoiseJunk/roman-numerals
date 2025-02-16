import React from 'react';
import styles from './EnterNumber.module.css';

function EnterNumber({ onNumberChange }) {
    const [number, setNumber] = React.useState('');

    const handleChange = (e) => {
        const inputValue = e.target.value;
        
        // Allow empty input and clear result
        if (inputValue === '') {
            setNumber('');
            onNumberChange('');
            return;
        }

        // Only allow numeric input
        if (!/^\d+$/.test(inputValue)) {
            return;
        }

        // Apply limits for actual numbers
        const value = Math.min(Math.max(inputValue, 1), 3999);
        setNumber(value);
        onNumberChange(Number(value));
    };

    return (
        <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="number" className={styles.label}>
                Please enter a number between <span className={styles.highlight}>1 and 3999</span> to convert to Roman Numerals
            </label>
            <div className={styles.inputWrapper}>
                <input
                    id="number"
                    type="number"
                    min="1"
                    max="3999"
                    placeholder=" "
                    className={styles.input}
                    value={number}
                    onChange={handleChange}
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^\d]/g, '');
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'e' || e.key === 'E') {
                            e.preventDefault();
                        }
                    }}
                    aria-label="Enter a number between 1 and 3999"
                />
                <span className={styles.placeholder}>Enter a number:-</span>
            </div>
        </form>
    );
}

export default EnterNumber;
