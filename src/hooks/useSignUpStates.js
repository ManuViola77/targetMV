import { useState } from 'react';
import strings from 'locale';

const useSignUpStates = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const [errorGender, setErrorGender] = useState('');

  const { SIGN_UP_ERROR } = strings;

  const cbName = newName => {
    setName(newName);
    setErrorName('');
  };

  const cbEmail = newEmail => {
    setEmail(newEmail);
    setErrorEmail('');
  };

  const cbPassword = newPassword => {
    setPassword(newPassword);
    setErrorPassword('');
  };

  const cbConfirmPassword = newConfirmPassword => {
    setConfirmPassword(newConfirmPassword);
    setErrorConfirmPassword('');
  };

  const cbGender = newGender => {
    setGender(newGender);
    setErrorGender('');
  };

  const cbSignUp = () => {
    setErrorEmail('');
    setErrorEmail('');
    setErrorPassword('');
    setErrorConfirmPassword('');
    setErrorGender('');

    if (!name) {
      setErrorName(SIGN_UP_ERROR.emptyName);
    }

    if (!email || !email.includes('@')) {
      setErrorEmail(SIGN_UP_ERROR.emptyEmail);
    }

    if (password.length < 6) {
      setErrorPassword(SIGN_UP_ERROR.passwordSixChar);
    }

    if (confirmPassword !== password) {
      setErrorConfirmPassword(SIGN_UP_ERROR.confirmPasswordMatch);
    }

    if (!gender) {
      setErrorGender(SIGN_UP_ERROR.emptyGender);
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    gender,
    errorName,
    errorEmail,
    errorPassword,
    errorConfirmPassword,
    errorGender,
    cbName,
    cbEmail,
    cbPassword,
    cbConfirmPassword,
    cbGender,
    cbSignUp,
  };
};

export default useSignUpStates;
