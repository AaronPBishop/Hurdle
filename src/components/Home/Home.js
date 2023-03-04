import PlacedLetters from "../PlacedLetters/PlacedLetters.js";
import ValidContainer from "../ValidLetters/ValidContainer";
import InvalidLetters from "../InvalidLetters/InvalidLetters.js";

const Home = () => {
    return (
        <div 
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '40vw'}}>
                <ValidContainer />
                <PlacedLetters />
                <InvalidLetters />
            </div>
        </div>
    );
};

export default Home;