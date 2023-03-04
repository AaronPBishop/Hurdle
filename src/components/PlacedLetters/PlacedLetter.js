import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/Provider.js';

const PlacedLetter = ({ index }) => {
    const { currClicked, setCurrClicked, placedVals, setPlacedVals } = useContext(AppContext);
    const [input, setInput] = useState('');

    useEffect(() => {
        const valsCopy = { ...placedVals };

        if (index === currClicked) {
            const keyDownHandler = e => {
                e.preventDefault();
        
                if (String.fromCharCode(e.keyCode).match(/[A-Za-z]/)) {
                    setInput(String.fromCharCode(e.keyCode));
                    valsCopy[index] = String.fromCharCode(e.keyCode);
                    setPlacedVals(valsCopy);

                    setCurrClicked(null);
                };
                
                if (e.keyCode === 8) {
                    setInput('');
                    setCurrClicked(null);
                };
              };
          
              document.addEventListener('keydown', keyDownHandler);

              return () => document.removeEventListener('keydown', keyDownHandler);
        };
    }, [currClicked]);

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '.5vw',
            width: '5vw',
            height: '10vh',
            boxShadow: index === currClicked ? '0px 0px 4px 1px rgb(200, 200, 0)' : '0px 0px 4px 1px black',
            border: '2px solid transparent',
            borderRadius: '1vw'
        }}>
            <p 
            style={{
                fontSize: '2.5em',
                marginTop: '.7vh',
                marginLeft: '.1vw',
                color: input.length ? 'black' : 'transparent',
            }}>
                    {input.length ? input : `${null}`}
            </p>
        </div>
    );
};

export default PlacedLetter;