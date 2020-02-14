import { useState } from 'react';
import { Keyboard } from 'react-native';

import { topic_id, topic_selected } from 'constants/fields';
import validate from 'validations';

const useAuthStates = onSubmit => {
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
    setValues,
  };
};

export default useAuthStates;
