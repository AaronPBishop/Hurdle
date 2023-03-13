import * as dict_1 from '../dictionary/words_1.json';
import * as dict_2 from '../dictionary/words_1.json';
import * as dict_3 from '../dictionary/words_1.json';

const dictionary = {};

[dict_1, dict_2, dict_3].forEach(file => Object.assign(dictionary, file));

export default dictionary;