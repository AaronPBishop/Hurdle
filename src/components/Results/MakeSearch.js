import { useContext, useEffect } from 'react';

import { AppContext } from '../../context/Provider.js';

import findWords from '../../functions/findWords.js';

const MakeSearch = () => {
    const { validVals, placedVals, misplacedVals, invalidVals, setResults, loading, setLoading, loaded, setLoaded } = useContext(AppContext);

    useEffect(() => {
        if (loading) {
            const results = findWords(validVals.toLowerCase(), placedVals, misplacedVals, invalidVals.toLowerCase());
            setResults(results);
            setLoading(false);
        };
    }, [loading]);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div
            onClick={async () => {
                if (loaded) {
                    setLoaded(false);
                    return;
                };

                setLoading(true);
            }}
            style={{
                marginTop: !loaded ? '3vh' : '8vh',
                width: '20vw',
                height: '10vh',
                backgroundColor: 'rgb(255, 140, 0)', 
                color: 'white',
                border: 'none',
                borderRadius: '.5vw',
                borderBottom: '4px solid rgb(205, 90, 0)',
                cursor: 'pointer'
            }}>
                <p style={{textAlign: 'center', fontSize: '1.5em', lineHeight: '4vh'}}>
                    { !loaded ? 'Search' : 'Adjust Query' }
                </p>
            </div>
        </div>
    );
};

export default MakeSearch;