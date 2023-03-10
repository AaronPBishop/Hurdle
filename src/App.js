import { Route, Routes } from 'react-router-dom';

import * as dictionary from './dictionary/words_dictionary.json';

import Home from './components/Home/Home.js';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home dictionary={dictionary} />} />
    </Routes>
  );
};

export default App;