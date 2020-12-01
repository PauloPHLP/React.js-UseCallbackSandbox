import React, { useContext, useEffect, useRef } from 'react';

import FormContext from './FormContext';

function Input({ name }) {
  const { registerField } = useContext(FormContext);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) registerField(name, inputRef.current);
  }, [name, registerField]);

  return (
    <input name={name} ref={inputRef} />
  );
}

export default Input;
