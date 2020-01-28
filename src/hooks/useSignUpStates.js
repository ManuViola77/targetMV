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
    console.log('cbName');
    setName(newName);
    setErrorName('');
  };

  const cbEmail = newEmail => {
    console.log('cbEmail');
    setEmail(newEmail);
    setErrorEmail('');
  };

  const cbPassword = newPassword => {
    console.log('cbPassword');
    setPassword(newPassword);
    setErrorPassword('');
  };

  const cbConfirmPassword = newConfirmPassword => {
    console.log('cbConfirmPassword');
    setConfirmPassword(newConfirmPassword);
    setErrorConfirmPassword('');
  };

  const cbGender = newGender => {
    console.log('cbGender');
    setGender(newGender);
    setErrorGender('');
  };

  const cbSignUp = () => {
    console.log('cbsignup');
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
