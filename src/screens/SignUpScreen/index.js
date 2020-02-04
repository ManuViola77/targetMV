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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Header from 'components/common/Header';
import Input from 'components/common/form/Input';
import Button from 'components/common/form/Button';
import Picker from 'components/common/form/Picker';
import ErrorView from 'components/common/form/ErrorView';
import styles from './styles';
import strings from 'locale';
import loginIcon from 'assets/logoLogin.png';
import useAuthStates from 'hooks/useAuthStates';
import { signUp } from 'actions/userActions';
import {
  name,
  email,
  password,
  confirmPassword,
  gender,
  errorMsg,
} from 'constants/fields';
import { SIGNUP_RESET } from 'constants/userActions';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import signUpValidations from 'validations/signUpValidations';

const { SIGN_UP, SIGN_UP_HELP, GENDER, COMMON } = strings;

const SignUp = ({ navigation }) => {
  useEffect(() => {
    return () => dispatch(SIGNUP_RESET);
  }, []);

  const signIn = useCallback(() => navigation.goBack(), [navigation]);
  const dispatch = useDispatch();
  const signUpRequest = useCallback(user => dispatch(signUp(user)), [dispatch]);
  const { error, status } = useStatus(signUp);
  const { values, errors, handleChange, handleAuth } = useAuthStates(
    signUpRequest,
  );
  const errorMessages = { ...errors, ...error };

  useNavigateOnLoginEffect(navigation);

  return (
    <ImageBackground source={loginIcon} style={styles.image}>
      <Header title={strings.COMMON.headerTitle} />
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'handled'}>
          <Input
            title={SIGN_UP.name}
            text={values[name]}
            callback={newValue => handleChange(name, newValue)}
            errorMessage={errorMessages[name]}
            autoCapitalize="words"
          />
          <Input
            title={SIGN_UP.email}
            text={values[email]}
            callback={newValue => handleChange(email, newValue)}
            errorMessage={errorMessages[email]}
          />
          <Input
            title={SIGN_UP.password}
            secureTextEntry
            text={values[password]}
            callback={newValue => handleChange(password, newValue)}
            errorMessage={errorMessages[password]}
            help={SIGN_UP_HELP.helpPassword}
          />
          <Input
            title={SIGN_UP.confirmPassword}
            secureTextEntry
            text={values[confirmPassword]}
            callback={newValue => handleChange(confirmPassword, newValue)}
            errorMessage={errorMessages[confirmPassword]}
          />
          <Picker
            title={SIGN_UP.gender}
            text={values[gender]}
            placeholder={GENDER.placeholder}
            options={GENDER.options}
            callback={newValue => handleChange(gender, newValue)}
            errorMessage={errorMessages[gender]}
          />
          <ErrorView error={errorMessages[errorMsg]} />
          <Button
            title={status === LOADING ? COMMON.loading : SIGN_UP.button}
            onPress={() => handleAuth(signUpValidations)}
          />
        </KeyboardAwareScrollView>
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
