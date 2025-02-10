import React from 'react';
import styles from './RomanNumeral.module.css';

function RomanNumeral({ result }) {
    const displayText = result === '' ? <span>Result will appear here</span> : result;
    
    return (
        <section className={styles.romannumeral} aria-live="polite">
            <output className={styles.result} role="status">
                {displayText}
            </output>
        </section>
    );
}

export default RomanNumeral;
