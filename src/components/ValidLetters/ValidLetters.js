import { useState, useContext, useEffect } from 'react';

import { AppContext } from '../../context/Provider.js';

const ValidLetters = () => {
    const [input, setInput] = useState('');

    const { setValidVals } = useContext(AppContext);

    useEffect(() => {setValidVals(input)}, [input]);

    const handleKeyDown = e => {
        if (e.key === "Backspace") {
            const inputCopy = [ ...input.split('') ];
            inputCopy.pop();
            setInput(inputCopy.join(''));
        };
        return;
    };

    return (
        <div>
            <p style={{fontFamily: 'Orbitron', fontWeight: 'bold', textShadow: '0px 1px 1px black', color: 'rgb(255, 140, 0)', textAlign: 'center', fontSize: '1.5em', marginBottom: '1.5vh'}}>
                Valid Letters
            </p>
            
            <input
            placeholder='Enter Valid Letters'
            value={input}
            onKeyDown={e => handleKeyDown(e)}
            onChange={e => {
                if (input.includes(e.target.value.charAt(e.target.value.length - 1).toUpperCase()) || input.length >= 5) return;
                if (e.target.value.charAt(e.target.value.length - 1).toUpperCase().match(/[A-Z]/)) setInput(e.target.value.toUpperCase());
            }}
            style={{
                fontFamily: 'Kanit',
                fontSize: '1.5em',
                width: '30vw',
                height: '8vh',
                border: 'none',
                boxShadow: '0px 0px 4px 1px rgb(0, 130, 135)',
                borderRadius: '.8vw',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: 'rgb(0, 190, 195)',
                color: 'white'
            }}>
            </input>
        </div>
    );
};

export default ValidLetters;