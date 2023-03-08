import { useContext, useEffect } from 'react';

import { AppContext } from '../../context/Provider.js';

const SearchResults = () => {
    const { results, loaded, setLoaded } = useContext(AppContext);

    useEffect(() => {
        if (results && results.length) setLoaded(true);
    }, [results]);

    return (
        <div
        style={{
            display: loaded ? 'block' : 'none',
            border: 'none',
            borderBottom: '0.8vh solid rgb(0, 140, 145)',
            borderRadius: '1vw',
            width: '28vw',
            height: results.length < 4 ? '30vh' : '50vh',
            marginTop: '10vh',
            overflowY: 'auto',
            backgroundColor: 'rgb(0, 190, 195)',
            color: 'white'
        }}>
            {
                results.map((word, i) => 
                    <p 
                    key={i}
                    style={{
                        marginTop: results.length < 2 ? '10vh' : '5vh',
                        fontSize: '2em',
                        textAlign: 'center',
                    }}>
                        {word}
                    </p>)
            }
        </div>
    );
};

export default SearchResults;