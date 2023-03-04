import { useState, useEffect } from 'react';

const ValidLetter = ({ isClicked }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        if (isClicked) {
            const keyDownHandler = e => {
                e.preventDefault();
        
                if (String.fromCharCode(e.keyCode).match(/[A-Za-z]/)) {
                    setInput(String.fromCharCode(e.keyCode));
                    isClicked = false;
                    return;
                };
                
                if (e.keyCode === 8) setInput('');
              };
          
              document.addEventListener('keydown', keyDownHandler);

              return () => document.removeEventListener('keydown', keyDownHandler);
        };
    }, [isClicked]);

    return (
        <div
        style={{
            display: 'inline-flex',
            margin: '.5vw',
            width: '5vw',
            height: '10vh',
            boxShadow: isClicked ? '0px 0px 4px 1px rgb(200, 200, 0)' : '0px 0px 4px 1px black',
            border: 'none',
            borderRadius: '1vw'
        }}>
            {input}
        </div>
    );
};

export default ValidLetter;