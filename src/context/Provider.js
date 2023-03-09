import React, { useState } from 'react';

export const AppContext = React.createContext();

const ContextProvider = ({ children }) => {
    const ltrPlacements = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    };

    const [currClicked, setCurrClicked] = useState(null);
    const [currMisClicked, setCurrMisClicked] = useState(null);

    const [validVals, setValidVals] = useState('');
    const [placedVals, setPlacedVals] = useState(ltrPlacements);
    const [misplacedVals, setMisplacedVals] = useState(ltrPlacements);
    const [invalidVals, setInvalidVals] = useState('');

    const [results, setResults] = useState([]);

    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
  
    const values = {
      currClicked, setCurrClicked,
      validVals, setValidVals,
      placedVals, setPlacedVals,
      misplacedVals, setMisplacedVals,
      invalidVals, setInvalidVals,
      results, setResults,
      loading, setLoading,
      loaded, setLoaded,
      currMisClicked, setCurrMisClicked
    };
  
    return (
      <AppContext.Provider value={values}>
        {children}
      </AppContext.Provider>
    );
};

export default ContextProvider;