import findPermutations from './findPermutations.js';

const dictionary = require('../dictionary/words_dictionary.json');

const determineTotalPlaced = (placedVals) => Object.values(placedVals).filter(el => el !== null).length;

const findAnagrams = (validVals) => {
    const finalAnagrams = [];
    const permutations = findPermutations(validVals);

    for (let i = 0; i < permutations.length; i++) if (dictionary[permutations[i]]) finalAnagrams.push(permutations[i])
    
    return finalAnagrams;
};

const generateRandomWord = (validVals, placedVals, invalidVals, triedWords) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';

    const values = Object.values(placedVals);
  
    for (let i = 0; i < 5; i++) {
        if (values[i] !== null) {
            word += values[i].toLowerCase();
        } else {
            let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

            while (invalidVals.includes(randomLetter)) {
                randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            };

            word += randomLetter;
        };
    };


    for (let ltr of validVals.split('')) {
        if (!word.split('').includes(ltr)) return generateRandomWord(validVals, placedVals, invalidVals, triedWords);
    };

    if (triedWords.includes(word)) return null;
  
    return word;
};

const makeGuesses = (validVals, placedVals, invalidVals, guesses=[], triedWords=[], i=0) => {
    if (i === 1000) return guesses;

    const guessCopy = [ ...guesses ];
    const triedCopy = [ ...triedWords ];

    const randWord = generateRandomWord(validVals, placedVals, invalidVals, triedWords);
    if (randWord === null) return makeGuesses(validVals, placedVals, invalidVals, guessCopy, triedCopy, i+=1);

    if (dictionary[randWord]) guessCopy.push(randWord);
    triedCopy.push(randWord);

    return makeGuesses(validVals, placedVals, invalidVals, guessCopy, triedCopy, i+=1);
};

const findWords = (validVals, placedVals, invalidVals) => {
    const totalPlacedVals = determineTotalPlaced(placedVals);

    if (validVals.length === 0) return ['Provide More Input'];
    if (validVals.length === 5 && totalPlacedVals === 0) return findAnagrams(validVals);
    if (validVals.length > 0 && invalidVals.length < 1) return ['Provide More Input'];

    return makeGuesses(validVals, placedVals, invalidVals);
};

export default findWords;