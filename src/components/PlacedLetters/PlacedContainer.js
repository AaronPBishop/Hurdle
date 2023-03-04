import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';
import PlacedLetter from './PlacedLetter.js';

const PlacedContainer = () => {
    const { setCurrClicked } = useContext(AppContext);
    
    return (
        <div>
            <p style={{textAlign: 'center', fontSize: '1.5em'}}>Placed Letters</p>
            {
                Array.from({ length: 5 }).map((el, i) => {
                    return (
                        <div 
                        onClick={() => setCurrClicked(i)}
                        style={{display: 'inline-flex'}}>
                            <PlacedLetter index={i} key={i} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PlacedContainer;