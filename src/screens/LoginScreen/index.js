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

const LoginScreen = ({ navigation }) => {
  const signUp = useCallback(() => navigation.push(SIGN_UP_SCREEN), [
    navigation,
  ]);

  return (
    <ImageBackground source={loginIcon} style={styles.image}>
      <Header title={strings.COMMON.headerTitle} />
      <SafeAreaView style={styles.safeArea}>
        <Input title={strings.LOGIN.email} />
        <Input title={strings.LOGIN.password} secureTextEntry />
        <Button title={strings.LOGIN.button} />
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.smallLink}>{strings.LOGIN.forgotPass}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mediumSpace}>
            <Text style={styles.boldLink}>{strings.LOGIN.connectFb}</Text>
          </TouchableOpacity>
          <View style={styles.allLeftSpace}>
            <View style={styles.lineStyle} />
            <TouchableOpacity onPress={signUp}>
              <Text style={styles.link}>{strings.LOGIN.signUp}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

LoginScreen.navigationOption = {
  title: strings.LOGIN.title,
};

export default LoginScreen;
