import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';

const SearchResults = () => {
    const { results } = useContext(AppContext);

    return (
        <div
        style={{
            display: results.length ? 'flex' : 'none',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            width: '100%',
            height: '20vh',
            marginTop: '6vh',
            overflowY: 'auto'
        }}>
            {
                results.map((word, i) => {
                    return (
                        <div style={{width: '10vw', padding: '1vw', marginRight: '20.5vw'}} key={i}>
                            <p>{word}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SearchResults;