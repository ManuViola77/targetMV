import React, { useCallback } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import Header from 'components/common/Header';
import Input from 'components/common/form/Input';
import Button from 'components/common/form/Button';
import styles from './styles';
import strings from 'locale';
import loginIcon from 'assets/logoLogin.png';
import useSignUpStates from 'hooks/useSignUpStates';

const { SIGN_UP, SIGN_UP_HELP } = strings;

const SignUp = ({ navigation }) => {
  const signIn = useCallback(() => navigation.goBack());

  const {
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
  } = useSignUpStates();

  return (
    <ImageBackground source={loginIcon} style={styles.image}>
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
