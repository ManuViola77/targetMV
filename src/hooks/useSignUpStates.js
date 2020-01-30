import { useState } from 'react';
import validate from 'validations';
import signUpValidations from 'validations/signUpValidations';
import { Keyboard } from 'react-native';

const useSignUpStates = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  handleChange = (key, value) => {
    setValues({ ...values, [key]: value });
    setErrors({ ...errors, [key]: null });
  };

  const handleSignUp = () => {
    Keyboard.dismiss();
    const constraints = signUpValidations;
    setErrors(validate(values, constraints));
  };

  return {
    values,
    errors,
    handleChange,
    handleSignUp,
  };
};

export default useSignUpStates;
