import { useState } from 'react';
import validate from 'validate.js';
import signUpValidations from 'validations/signUpValidations';

const useSignUpStates = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  handleChange = (key, value) => {
    setValues({ ...values, [key]: value });
    setErrors({ ...errors, [key]: '' });
  };

  const handleSignUp = () => {
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
