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

const LoginScreen = () => (
  <ImageBackground
    source={require('assets/logoLogin.png')}
    style={styles.image}>
    <Header title="TARGET MV" />

    <SafeAreaView style={styles.safeArea}>
      <InputForm title="Email" secureTextEntry={false} />

      <InputForm title="Password" secureTextEntry={true} />

      <ButtonForm title="SIGN IN" />

      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.smallLink}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mediumSpace}>
          <Text style={styles.boldLink}>CONNECT WITH FACEBOOK</Text>
        </TouchableOpacity>

        <View style={styles.allLeftSpace}>
          <View style={styles.lineStyle} />
          <TouchableOpacity style={styles.link}>
            <Text>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </ImageBackground>
);

export default LoginScreen;
