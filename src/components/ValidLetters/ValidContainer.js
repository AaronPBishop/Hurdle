import { useState } from 'react';

import ValidLetter from './ValidLetter';

const ValidContainer = () => {
    const [currClicked, setCurrClicked] = useState(null);
    
    return (
        <div>
            <p style={{textAlign: 'center', fontSize: '1.5em'}}>Valid Letters</p>
            {
                Array.from({ length: 5 }).map((el, i) => {
                    return (
                        <div 
                        onClick={() => setCurrClicked(i)}
                        style={{display: 'inline-flex'}}>
                            <ValidLetter isClicked={currClicked === i} key={i} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ValidContainer;