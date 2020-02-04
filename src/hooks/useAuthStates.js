import { useState } from 'react';
import validate from 'validations';
import signUpValidations from 'validations/signUpValidations';
import signInValidations from 'validations/signInValidations';
import { Keyboard } from 'react-native';

const useAuthStates = onSubmit => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setValues({ ...values, [key]: value });
    setErrors({ ...errors, [key]: null });
  };

  const handleAuth = constraints => {
    Keyboard.dismiss();
    const errorMessages = validate(values, constraints);
    errorMessages ? setErrors(errorMessages) : onSubmit(values);
  };

  const resetState = () => {
    setValues({});
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleAuth,
    resetState,
  };
};

export default useAuthStates;
