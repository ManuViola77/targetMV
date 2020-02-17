import { useState } from 'react';
import { Keyboard } from 'react-native';

import validate from 'validations';

const useCreateTargetStates = onSubmit => {
  const [targetValues, setTargetValues] = useState({});
  const [targetErrors, setTargetErrors] = useState({});

  const handleChange = (key, value) => {
    setTargetValues({ ...targetValues, [key]: value });
    setTargetErrors({ ...targetErrors, [key]: null });
  };

  const handleCreateTarget = constraints => {
    Keyboard.dismiss();
    const errorMessages = validate(targetValues, constraints);
    errorMessages ? setTargetErrors(errorMessages) : onSubmit(targetValues);
  };

  const resetState = () => {
    setTargetValues({});
    setTargetErrors({});
  };

  return {
    targetValues,
    targetErrors,
    handleChange,
    handleCreateTarget,
    resetState,
  };
};

export default useCreateTargetStates;
