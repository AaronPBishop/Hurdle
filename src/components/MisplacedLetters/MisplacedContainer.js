import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';
import MisplacedLetter from './MisplacedLetter.js';

const MisplacedContainer = () => {
    const { setCurrMisClicked } = useContext(AppContext);
    
    return (
        <div>
            <p style={{textAlign: 'center', fontSize: '1.5em'}}>Misplaced Letters</p>
            {
                Array.from({ length: 5 }).map((el, i) => 
                    <div 
                    key={i}
                    onClick={() => setCurrMisClicked(i)}
                    style={{display: 'inline-flex'}}>
                        <MisplacedLetter index={i} />
                    </div>
                )
            }
        </div>
    );
};

export default MisplacedContainer;