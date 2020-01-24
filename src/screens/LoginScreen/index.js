import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import Header from 'components/common/Header';
import InputForm from 'components/common/InputForm';
import ButtonForm from 'components/common/ButtonForm';
import styles from './styles';
import strings from 'locale';

const LoginScreen = () => (
  <ImageBackground
    source={require('assets/logoLogin.png')}
    style={styles.image}>
    <Header title={strings.COMMON.headerTitle} />
    <SafeAreaView style={styles.safeArea}>
      <InputForm title={strings.LOGIN.email} secureTextEntry={false} />
      <InputForm title={strings.LOGIN.password} secureTextEntry={true} />
      <ButtonForm title={strings.LOGIN.button} />
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.smallLink}>{strings.LOGIN.forgotPass}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediumSpace}>
          <Text style={styles.boldLink}>{strings.LOGIN.connectFb}</Text>
        </TouchableOpacity>
        <View style={styles.allLeftSpace}>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <Text style={styles.link}>{strings.LOGIN.signUp}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </ImageBackground>
);

LoginScreen.navigationOption = {
  title: strings.LOGIN.title,
};

export default LoginScreen;
