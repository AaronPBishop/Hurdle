import findPermutations from './findPermutations.js';

const dictionaryFile = require('../dictionary/words_dictionary.json');
const words = Object.keys(dictionaryFile);

const dictionary = {};
words.forEach(word => dictionary[word] = true);

const determineTotalPlaced = (placedVals) => Object.values(placedVals).filter(el => el !== null).length;

const findAnagrams = (validVals) => {
    const finalAnagrams = [];
    const permutations = findPermutations(validVals);

    for (let i = 0; i < permutations.length; i++) if (dictionary[permutations[i]]) finalAnagrams.push(permutations[i])
    
    return finalAnagrams;
};

const generateAlphabet = (validVals, invalidVals) =>  {
    const filtered = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(ltr => !invalidVals.includes(ltr));

    const filterCopy = [ ...filtered ];
    for (let i = 0; i < filtered.length; i++) {
        const currLtr = filtered[i];
        if (validVals.includes(currLtr)) {
            filterCopy.splice(i, 0, currLtr, currLtr)
        };
    };

    return filterCopy.join('');
};

const containsAllValidVals = (word, validVals) => {
    const ltrs = {};
    for (let i = 0; i < word.split('').length; i++) {
        for (let j = 0; j < validVals.split('').length; j++) {
            if (word.split('')[i] === validVals.split('')[j]) {
                if (ltrs[validVals.split('')[j]] !== undefined) ltrs[validVals.split('')[j]]++;
                if (ltrs[validVals.split('')[j]] === undefined) ltrs[validVals.split('')[j]] = 1;
            };
        };
    };

    if (Object.keys(ltrs).length === validVals.split('').length) return true;
    return false;
};

const generateRandomWord = (validVals, placedVals, misplacedVals, invalidVals, triedWords) => {
    const alphabet = generateAlphabet(validVals, invalidVals);
    let word = '';

    const placedValues = Object.values(placedVals);
    const misplacedValues = Object.values(misplacedVals);
  
    for (let i = 0; i < 5; i++) {
        if (placedValues[i] !== null) {
            word += placedValues[i].toLowerCase();
        } else {
            let randLtr = alphabet[Math.floor(Math.random() * alphabet.length)];

            while (randLtr.toUpperCase() === misplacedValues[i]) randLtr = alphabet[Math.floor(Math.random() * alphabet.length)];

            word += randLtr;
        };
    };

    if (triedWords.has(word)) return null;
    if (containsAllValidVals(word, validVals)) return word;
    return null;
};

const makeGuesses = (validVals, placedVals, misplacedVals, invalidVals) => {
    const guesses = [];
    const triedWords = new Set();

    let i = 0;
    while (i < 1000000) {
        const randWord = generateRandomWord(validVals, placedVals, misplacedVals, invalidVals, triedWords);
        if (randWord === null) {
            i++;
            continue;
        };

        if (dictionary[randWord]) guesses.push(randWord);
        triedWords.add(randWord);
        i++;
    };

    return guesses;
};

const findWords = (validVals, placedVals, misplacedVals, invalidVals) => {
    if (!validVals.length || !invalidVals.length) return ['Provide More Input for Accurate Results'];
    if (validVals.length === 5 && determineTotalPlaced(placedVals) === 0) return findAnagrams(validVals);

    return makeGuesses(validVals, placedVals, misplacedVals, invalidVals);
};

export default findWords;