import { useState } from 'react';
import { Keyboard } from 'react-native';

import { topicId, topicSelected } from 'constants/fields';
import validate from 'validations';

const useFormStates = onSubmit => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    if (key === topicSelected) {
      setValues({ ...values, [key]: value, [topicId]: value.id });
      setErrors({ ...errors, [key]: null, [topicId]: null });
    } else {
      setValues({ ...values, [key]: value });
      setErrors({ ...errors, [key]: null });
    }
  };

  const handleConfirmForm = constraints => {
    Keyboard.dismiss();
    const errorMessages = validate(values, constraints);
    errorMessages ? setErrors(errorMessages) : onSubmit(values);
  };

  const resetState = (values, errors) => {
    setValues(values);
    setErrors(errors);
  };

  return {
    values,
    errors,
    handleChange,
    handleConfirmForm,
    resetState,
    setValues,
  };
};

export default useFormStates;
