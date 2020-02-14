import { useState } from 'react';
import { Keyboard } from 'react-native';

import { topic_id, topic_selected } from 'constants/fields';
import validate from 'validations';

const useFormStates = onSubmit => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    if (key === topic_selected) {
      setValues({ ...values, [key]: value, [topic_id]: value.id });
      setErrors({ ...errors, [key]: null, [topic_id]: null });
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

  const resetState = () => {
    setValues({});
    setErrors({});
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
