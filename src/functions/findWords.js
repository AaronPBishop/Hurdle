const dictionary = require('../dictionary/words_dictionary.json');
const allWords = Object.keys(dictionary);

const filterByLength = () => allWords.filter(word => word.length === 5);

const findWords = (validVals, placedVals, invalidVals) => {
    return [filterByLength()];
};

export default findWords;