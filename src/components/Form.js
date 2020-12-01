import React, { useCallback, useState } from 'react';

import FormContext from './FormContext';

function Form({ children }) {
  const [inputs, setInputs] = useState([]);

  const registerField = useCallback((name, ref) => {
    setInputs(previous => [...previous, {name, ref}]);
  }, []);

  return (
    <form>
      <FormContext.Provider value={{ registerField }}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

export default Form;
