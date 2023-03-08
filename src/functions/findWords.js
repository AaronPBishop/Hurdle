import findPermutations from './findPermutations.js';

const dictionary = require('../dictionary/words_dictionary.json');

const determineTotalPlaced = (placedVals) => Object.values(placedVals).filter(el => el !== null).length;

const findAnagrams = (validVals) => {
    const finalAnagrams = [];
    const permutations = findPermutations(validVals);

    for (let i = 0; i < permutations.length; i++) if (dictionary[permutations[i]]) finalAnagrams.push(permutations[i])
    
    return finalAnagrams;
};

const generateAlphabet = (validVals, invalidVals) =>  {
    const filtered = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(ltr => !invalidVals.includes(ltr));

    const filterCopy = [...filtered];
    for (let i = 0; i < filtered.length; i++) {
        const currLtr = filtered[i];
        if (validVals.includes(currLtr)) {
            filterCopy.splice(i, 0, currLtr, currLtr, currLtr)
        };
    };

    return filterCopy.join('');
};

const generateRandomWord = (validVals, placedVals, invalidVals, triedWords) => {
    const alphabet = generateAlphabet(validVals, invalidVals);
    let word = '';

    const values = Object.values(placedVals);
  
    for (let i = 0; i < 5; i++) {
        if (values[i] !== null) {
            word += values[i].toLowerCase();
        } else {
            word += alphabet[Math.floor(Math.random() * alphabet.length)];
        };
    };

    if (triedWords.has(word)) return null;
  
    return word;
};

const makeGuesses = (validVals, placedVals, invalidVals) => {
    const guessCopy = [];
    const triedWords = new Set();

    let i = 0;
    while (i < 1000000) {
        const randWord = generateRandomWord(validVals, placedVals, invalidVals, triedWords);
        if (randWord === null) {
            i++;
            continue;
        };

        if (dictionary[randWord]) guessCopy.push(randWord);
        triedWords.add(randWord);
        i++;
    };

    return guessCopy;
};

const findWords = (validVals, placedVals, invalidVals) => {
    const totalPlacedVals = determineTotalPlaced(placedVals);

    if (validVals.length === 0) return ['Provide More Input'];
    if (validVals.length === 5 && totalPlacedVals === 0) return findAnagrams(validVals);
    if (validVals.length > 0 && invalidVals.length < 1) return ['Provide More Input'];

    return makeGuesses(validVals, placedVals, invalidVals);
};

export default findWords;