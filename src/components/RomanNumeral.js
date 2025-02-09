import React from 'react';
import styles from './RomanNumeral.module.css';

function RomanNumeral({ result }) {
    return (
        <div className={styles.romannumeral}>
            <p className={styles.result}>{result}</p>
        </div>
    );
}

export default RomanNumeral;
