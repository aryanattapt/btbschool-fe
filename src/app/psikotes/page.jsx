'use client';
// import "./styles.css";

import { useState } from 'react';

export default function App() {
    const regexNumber = /^\d*$/
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(0);

    const inputOnChangeHandler = (e) => {
        const value = e.target.value;
        if (regexNumber.test(value)) {
            setNumber(value);
        }
    };

    const handleInput = () => {
        if (!number) return;

        const finalInput = number.replace(',', '').replace(".", "");
        const num = parseInt(finalInput);
        if (isNaN(num)) return;

        const reversed = parseInt(finalInput.split('').reverse().join(''));
        const diff = Math.abs(num - reversed);
        setResult(diff);
  };

    return (
        <div className="App">
            <div>
                Number: <input onChange={inputOnChangeHandler} value={number} />
                <button onClick={handleInput}>Submit</button>
            </div>
            {result && <div>Result: {result}</div>}
        </div>
    );
}