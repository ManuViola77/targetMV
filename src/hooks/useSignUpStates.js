import { useState } from 'react';
import validate from 'validations';
import signUpValidations from 'validations/signUpValidations';
import { Keyboard } from 'react-native';

const useSignUpStates = onSubmit => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  handleChange = (key, value) => {
    setValues({ ...values, [key]: value });
    setErrors({ ...errors, [key]: null });
  };

  const handleSignUp = () => {
    Keyboard.dismiss();
    const constraints = signUpValidations;
    const errorMessages = validate(values, constraints);
    errorMessages ? setErrors(errorMessages) : onSubmit(values);
  };

  return {
    values,
    errors,
    handleChange,
    handleSignUp,
  };
};

export default useSignUpStates;
