import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';

const SearchResults = () => {
    const { results } = useContext(AppContext);

    return (
        <div
        style={{
            display: results.length ? 'flex' : 'none',
            justifyContent: 'center',
            border: 'none',
            borderBottom: '0.4vh solid rgb(0, 140, 145)',
            borderRadius: '1vw',
            flexWrap: 'wrap',
            width: '28vw',
            height: '20vh',
            marginTop: '4vh',
            overflowY: 'auto',
            backgroundColor: 'rgb(0, 190, 195)',
            color: 'white'
        }}>
            {
                results.map((word, i) => 
                    <p 
                    key={i}
                    style={{
                        fontSize: '2em',
                        textAlign: 'center',
                        marginTop: '0vh',
                        marginBottom: '0vh',
                        width: '20vw'
                    }}>
                        {word}
                    </p>)
            }
        </div>
    );
};

export default SearchResults;