import ValidLetters from "../ValidLetters/ValidLetters.js";
import PlacedContainer from "../PlacedLetters/PlacedContainer.js";
import InvalidLetters from "../InvalidLetters/InvalidLetters.js";
import MakeSearch from "../Results/MakeSearch.js";
import SearchResults from "../Results/SearchResults.js";

const Home = () => {
    return (
        <div 
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '40vw'}}>
                <ValidLetters />
                <PlacedContainer />
                <InvalidLetters />
                <MakeSearch />
                <SearchResults />
            </div>
        </div>
    );
};

export default Home;