import { useState, useEffect, useContext } from 'react';

import { AppContext } from '../../context/Provider.js';

import findWords from '../../functions/findWords.js';

const MakeSearch = () => {
    const { validVals, placedVals, invalidVals, setResults } = useContext(AppContext);

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked === true) {
            const results = findWords(validVals, placedVals, invalidVals);
            setResults(results);
            setClicked(false);
        };
    }, [clicked]);

    return (
        <div
        onClick={() => setClicked(true)}
        style={{
            marginTop: '6vh',
            width: '20vw',
            height: '10vh',
            backgroundColor: 'rgb(255, 140, 0)', 
            color: 'white',
            border: 'none',
            borderRadius: '.5vw',
            borderBottom: '4px solid rgb(205, 90, 0)',
            cursor: 'pointer'
        }}>
            <p style={{textAlign: 'center', fontSize: '1.5em', marginTop: '2.5vh'}}>Search</p>
        </div>
    );
};

export default MakeSearch;