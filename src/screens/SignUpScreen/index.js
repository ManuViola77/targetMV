import React, { useCallback, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { signUp, signUpReset } from 'actions/userActions';
import loginIcon from 'assets/images/logoLogin.png';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import Picker from 'components/common/form/Picker';
import Header from 'components/common/Header';
import {
  name,
  email,
  password,
  confirmPassword,
  gender,
  errorMsg,
} from 'constants/fields';
import useFormStates from 'hooks/useFormStates';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import strings from 'locale';
import signUpValidations from 'validations/signUpValidations';
import styles from './styles';

const { SIGN_UP, SIGN_UP_HELP, GENDER, COMMON } = strings;

const SignUp = ({ navigation }) => {
  useEffect(() => {
    return () => dispatch(signUpReset());
  }, []);

  const signIn = useCallback(() => navigation.goBack(), [navigation]);
  const dispatch = useDispatch();
  const signUpRequest = useCallback(user => dispatch(signUp(user)), [dispatch]);
  const { error, status } = useStatus(signUp);
  const { values, errors, handleChange, handleConfirmForm } = useFormStates(
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
            autoCapitalize="words"
            callback={newValue => handleChange(name, newValue)}
            errorMessage={errorMessages[name]}
            text={values[name]}
            title={SIGN_UP.name}
          />
          <Input
            callback={newValue => handleChange(email, newValue)}
            errorMessage={errorMessages[email]}
            text={values[email]}
            title={SIGN_UP.email}
          />
          <Input
            callback={newValue => handleChange(password, newValue)}
            errorMessage={errorMessages[password]}
            help={SIGN_UP_HELP.helpPassword}
            secureTextEntry
            text={values[password]}
            title={SIGN_UP.password}
          />
          <Input
            callback={newValue => handleChange(confirmPassword, newValue)}
            errorMessage={errorMessages[confirmPassword]}
            secureTextEntry
            text={values[confirmPassword]}
            title={SIGN_UP.confirmPassword}
          />
          <Picker
            callback={newValue => handleChange(gender, newValue)}
            errorMessage={errorMessages[gender]}
            options={GENDER.options}
            placeholder={GENDER.placeholder}
            text={values[gender]}
            title={SIGN_UP.gender}
          />
          <ErrorView error={errorMessages[errorMsg]} />
          <Button
            onPress={() => handleConfirmForm(signUpValidations)}
            title={status === LOADING ? COMMON.loading : SIGN_UP.button}
          />
          <View style={styles.allLeftSpace}>
            <View style={styles.lineStyle} />
            <TouchableOpacity onPress={signIn}>
              <Text style={styles.link}>{SIGN_UP.signIn}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;
