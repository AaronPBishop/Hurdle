import { useContext } from 'react';

import { AppContext } from '../../context/Provider.js';

import ValidLetters from "../ValidLetters/ValidLetters.js";
import PlacedContainer from "../PlacedLetters/PlacedContainer.js";
import MisplacedContainer from '../MisplacedLetters/MisplacedContainer.js';
import InvalidLetters from "../InvalidLetters/InvalidLetters.js";
import MakeSearch from "../Results/MakeSearch.js";
import SearchResults from "../Results/SearchResults.js";
import Spinner from './Spinner.js';

const Home = () => {
    const { loaded } = useContext(AppContext);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                border: 'none',
                borderBottom: '0.8vh solid rgb(0, 170, 175)',
                borderRadius: '1vw',
                width: '50vw',
                height: '97vh',
                backgroundColor: 'rgb(0, 220, 225)',
                boxShadow: '0px 0px 6px 2px rgb(0, 40, 120)',
                overflowY: 'auto'
            }}>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '40vw'}}>
                    <div style={{ display: loaded ? 'none' : 'block' }}>
                        <ValidLetters />
                        <PlacedContainer />
                        <MisplacedContainer />
                        <InvalidLetters />
                        <Spinner />
                    </div>

                    <div>
                        <MakeSearch />
                        <SearchResults />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;