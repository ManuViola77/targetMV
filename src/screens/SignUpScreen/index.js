import React, { useCallback, useState } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import Header from 'components/common/Header';
import Input from 'components/common/Form/Input';
import Button from 'components/common/Form/Button';
import styles from './styles';
import strings from 'locale';

const SignUp = ({ navigation }) => {
  const signIn = useCallback(() => navigation.goBack());

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

  const { SIGN_UP, SIGN_UP_ERROR, SIGN_UP_HELP } = strings;

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

  return (
    <ImageBackground
      source={require('assets/logoLogin.png')}
      style={styles.image}>
      <Header title={strings.COMMON.headerTitle} />
      <SafeAreaView style={styles.safeArea}>
        <Input
          title={SIGN_UP.name}
          text={name}
          callback={cbName}
          errorMessage={errorName}
        />
        <Input
          title={SIGN_UP.email}
          text={email}
          callback={cbEmail}
          errorMessage={errorEmail}
        />
        <Input
          title={SIGN_UP.password}
          secureTextEntry
          text={password}
          callback={cbPassword}
          errorMessage={errorPassword}
          help={SIGN_UP_HELP.helpPassword}
        />
        <Input
          title={SIGN_UP.confirmPassword}
          secureTextEntry
          text={confirmPassword}
          callback={cbConfirmPassword}
          errorMessage={errorConfirmPassword}
        />
        <Input
          title={SIGN_UP.gender}
          text={gender}
          callback={cbGender}
          errorMessage={errorGender}
        />
        <Button title={SIGN_UP.button} onPress={cbSignUp} />
        <View style={styles.allLeftSpace}>
          <View style={styles.lineStyle} />
          <TouchableOpacity onPress={signIn}>
            <Text style={styles.link}>{SIGN_UP.signIn}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;
