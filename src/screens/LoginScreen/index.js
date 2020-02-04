import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';
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
import ErrorView from 'components/common/form/ErrorView';
import styles from './styles';
import strings from 'locale';
import { SIGN_UP_SCREEN } from 'constants/screens';
import loginIcon from 'assets/logoLogin.png';
import useAuthStates from 'hooks/useAuthStates';
import { email, password, errorMsg } from 'constants/fields';
import { login } from 'actions/userActions';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import { LOGIN_RESET } from 'constants/userActions';
import signInValidations from 'validations/signInValidations';

const { COMMON, LOGIN } = strings;

const LoginScreen = ({ navigation }) => {
  const signUp = useCallback(() => navigation.push(SIGN_UP_SCREEN), [
    navigation,
  ]);

  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const { error } = useStatus(login);

  const {
    values,
    errors,
    handleChange,
    handleAuth,
    resetState,
  } = useAuthStates(loginRequest);

  const errorMessages = { ...errors, ...error };

  const cleanUp = () => {
    dispatch(LOGIN_RESET);
    resetState();
  };

  useEffect(() => {
    const focusListener = navigation.addListener('willBlur', () => {
      cleanUp();
    });
    return () => {
      cleanUp();
      focusListener.remove();
    };
  }, []);

  useNavigateOnLoginEffect(navigation);

  return (
    <ImageBackground source={loginIcon} style={styles.image}>
      <Header title={COMMON.headerTitle} />
      <SafeAreaView style={styles.safeArea}>
        <Input
          title={LOGIN.email}
          text={values[email]}
          callback={newValue => handleChange(email, newValue)}
          errorMessage={errorMessages[email]}
        />
        <Input
          title={LOGIN.password}
          secureTextEntry
          text={values[password]}
          callback={newValue => handleChange(password, newValue)}
          errorMessage={errorMessages[password]}
        />
        <ErrorView error={errorMessages[errorMsg]} />
        <Button
          title={LOGIN.button}
          onPress={() => handleAuth(signInValidations)}
        />
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
