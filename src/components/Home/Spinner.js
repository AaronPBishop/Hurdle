import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';

import './index.css';

const Spinner = () => {
    const { loading } = useContext(AppContext);

    return (
        <div style={{display: loading ? 'flex' : 'none', justifyContent: 'center', position: 'relative', top: '2vh'}}>
            <div className='spinner'></div>
        </div>
    );
};

export default Spinner;