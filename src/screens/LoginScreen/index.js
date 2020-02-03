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
import { SIGN_UP_SCREEN } from 'constants/screens';
import loginIcon from 'assets/logoLogin.png';
import useSignUpStates from 'hooks/useSignUpStates';
import { loginEmail, loginPassword } from 'constants/fields';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';

const { COMMON, LOGIN } = strings;

const LoginScreen = ({ navigation }) => {
  const signUp = useCallback(() => navigation.push(SIGN_UP_SCREEN), [
    navigation,
  ]);

  const { values, errors, handleChange } = useSignUpStates();

  useNavigateOnLoginEffect(navigation);

  return (
    <ImageBackground source={loginIcon} style={styles.image}>
      <Header title={COMMON.headerTitle} />
      <SafeAreaView style={styles.safeArea}>
        <Input
          title={LOGIN.email}
          text={values.loginEmail}
          callback={newValue => handleChange(loginEmail, newValue)}
          errorMessage={errors.loginEmail}
        />
        <Input
          title={LOGIN.password}
          secureTextEntry
          text={values.loginPassword}
          callback={newValue => handleChange(loginPassword, newValue)}
          errorMessage={errors.loginPassword}
        />
        <Button title={LOGIN.button} />
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.smallLink}>{LOGIN.forgotPass}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mediumSpace}>
            <Text style={styles.boldLink}>{LOGIN.connectFb}</Text>
          </TouchableOpacity>
          <View style={styles.allLeftSpace}>
            <View style={styles.lineStyle} />
            <TouchableOpacity onPress={signUp}>
              <Text style={styles.link}>{LOGIN.signUp}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

LoginScreen.navigationOption = {
  title: LOGIN.title,
};

export default LoginScreen;
