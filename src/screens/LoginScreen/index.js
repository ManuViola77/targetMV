import React, { useCallback, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { login, loginReset } from 'actions/userActions';
import loginIcon from 'assets/images/logoLogin.png';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import Header from 'components/common/Header';
import FBSessionButton from 'components/FBSessionButton';
import { email, password, errorMsg } from 'constants/fields';
import { SIGN_UP_SCREEN } from 'constants/screens';
import useFormStates from 'hooks/useFormStates';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import strings from 'locale';
import signInValidations from 'validations/signInValidations';
import styles from './styles';

const { COMMON, LOGIN } = strings;

const LoginScreen = ({ navigation }) => {
  const signUp = useCallback(() => navigation.push(SIGN_UP_SCREEN), [
    navigation,
  ]);

  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const { error, status } = useStatus(login);

  const {
    values,
    errors,
    handleChange,
    handleConfirmForm,
    resetState,
  } = useFormStates(loginRequest);

  const errorMessages = { ...errors, ...error };

  const cleanUp = () => {
    dispatch(loginReset());
    resetState({}, {});
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
          callback={newValue => handleChange(email, newValue)}
          errorMessage={errorMessages[email]}
          text={values[email]}
          title={LOGIN.email}
        />
        <Input
          callback={newValue => handleChange(password, newValue)}
          errorMessage={errorMessages[password]}
          text={values[password]}
          title={LOGIN.password}
          secureTextEntry
        />
        <ErrorView error={errorMessages[errorMsg]} />
        <Button
          onPress={() => handleConfirmForm(signInValidations)}
          title={status === LOADING ? COMMON.loading : LOGIN.button}
        />
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.smallLink}>{LOGIN.forgotPass}</Text>
          </TouchableOpacity>
          <Text style={styles.boldLink}>{LOGIN.connectFb}</Text>
          <FBSessionButton />
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
