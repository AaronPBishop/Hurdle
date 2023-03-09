import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';
import PlacedLetter from './PlacedLetter.js';

const PlacedContainer = () => {
    const { currClicked, setCurrClicked } = useContext(AppContext);
    
    return (
        <div>
            <p style={{fontFamily: 'Orbitron', fontWeight: 'bold', textShadow: '0px 1px 1px black', color: 'rgb(255, 140, 0)', textAlign: 'center', fontSize: '1.5em', marginBottom: '1vh'}}>
                Placed Letters
            </p>

            {
                Array.from({ length: 5 }).map((el, i) => 
                    <div 
                    key={i}
                    onClick={() => {
                        currClicked ? setCurrClicked(null) : setCurrClicked(i)
                    }}
                    style={{display: 'inline-flex'}}>
                        <PlacedLetter index={i} />
                    </div>
                )
            }
        </div>
    );
};

export default PlacedContainer;