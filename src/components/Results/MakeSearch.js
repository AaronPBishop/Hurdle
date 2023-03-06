import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';

import findWords from '../../functions/findWords.js';

const MakeSearch = () => {
    const { validVals, placedVals, invalidVals, setResults } = useContext(AppContext);

    return (
        <div
        onClick={() => {
            const results = findWords(validVals.toLowerCase(), placedVals, invalidVals.toLowerCase());
            setResults(results);
        }}
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