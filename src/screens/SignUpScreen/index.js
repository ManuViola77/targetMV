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
import {
  name,
  email,
  password,
  confirmPassword,
  gender,
} from 'constants/fields';

const { SIGN_UP, SIGN_UP_HELP } = strings;

const SignUp = ({ navigation }) => {
  const signIn = useCallback(() => navigation.goBack(), [navigation]);

  const { values, errors, handleChange, handleSignUp } = useSignUpStates();

  return (
    <ImageBackground source={loginIcon} style={styles.image}>
      <Header title={strings.COMMON.headerTitle} />
      <SafeAreaView style={styles.safeArea}>
        <Input
          title={SIGN_UP.name}
          text={values.name}
          callback={newValue => handleChange(name, newValue)}
          errorMessage={errors.name}
        />
        <Input
          title={SIGN_UP.email}
          text={values.email}
          callback={newValue => handleChange(email, newValue)}
          errorMessage={errors.email}
        />
        <Input
          title={SIGN_UP.password}
          secureTextEntry
          text={values.password}
          callback={newValue => handleChange(password, newValue)}
          errorMessage={errors.password}
          help={SIGN_UP_HELP.helpPassword}
        />
        <Input
          title={SIGN_UP.confirmPassword}
          secureTextEntry
          text={values.confirmPassword}
          callback={newValue => handleChange(confirmPassword, newValue)}
          errorMessage={errors.confirmPassword}
        />
        <Input
          title={SIGN_UP.gender}
          text={values.gender}
          callback={newValue => handleChange(gender, newValue)}
          errorMessage={errors.gender}
        />
        <Button title={SIGN_UP.button} onPress={handleSignUp} />
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
