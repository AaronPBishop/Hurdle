import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';
import MisplacedLetter from './MisplacedLetter.js';

const MisplacedContainer = () => {
    const { currMisClicked, setCurrMisClicked } = useContext(AppContext);
    
    return (
        <div>
            <p style={{fontFamily: 'Orbitron', fontWeight: 'bold', textShadow: '0px 1px 1px black', color: 'rgb(255, 140, 0)', textAlign: 'center', fontSize: '1.5em', marginBottom: '1vh'}}>
                Misplaced Letters
            </p>

            {
                Array.from({ length: 5 }).map((el, i) => 
                    <div 
                    key={i}
                    onClick={() => {
                        currMisClicked ? setCurrMisClicked(null) : setCurrMisClicked(i)
                    }}
                    style={{display: 'inline-flex'}}>
                        <MisplacedLetter index={i} />
                    </div>
                )
            }
        </div>
    );
};

export default MisplacedContainer;