import React from 'react';
import styles from './RomanNumeral.module.css';

function RomanNumeral({ result }) {
    const displayText = result === '' ? <span>Result will appear here</span> : result;
    
    return (
        <div className={styles.romannumeral}>
            <p className={styles.result}>{displayText}</p>
        </div>
    );
}

export default RomanNumeral;
