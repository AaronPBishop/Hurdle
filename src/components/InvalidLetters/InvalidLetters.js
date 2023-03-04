import { useState, useContext, useEffect } from 'react';

import { AppContext } from '../../context/Provider.js';

const InvalidLetters = () => {
    const [input, setInput] = useState('');

    const { setInvalidVals } = useContext(AppContext);

    useEffect(() => {setInvalidVals(input)}, [input]);

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
            <p style={{textAlign: 'center', fontSize: '1.5em'}}>Invalid Letters</p>
            
            <input
            placeholder='Enter Invalid Letters'
            value={input}
            onKeyDown={e => handleKeyDown(e)}
            onChange={e => {
                if (input.includes(e.target.value.charAt(e.target.value.length - 1).toUpperCase()) || input.length >= 26) return;
                if (e.target.value.charAt(e.target.value.length - 1).toUpperCase().match(/[A-Z]/)) setInput(e.target.value.toUpperCase());
            }}
            style={{
                fontFamily: 'Kanit',
                fontSize: '1.5em',
                width: '30vw',
                height: '8vh',
                border: 'none',
                boxShadow: '0px 0px 4px 1px black',
                borderRadius: '.8vw',
                textAlign: 'center',
                cursor: 'pointer'
            }}>
            </input>
        </div>
    );
};

export default InvalidLetters;