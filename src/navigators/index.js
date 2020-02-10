import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';

import chatBubble from 'assets/images/chat_bubble.png';
import profileIcon from 'assets/images/profile.png';
import strings from 'locale';
import AppLoader from 'screens/AppLoader';
import LoginScreen from 'screens/LoginScreen';
import MainScreen from 'screens/MainScreen';
import SignUpScreen from 'screens/SignUpScreen';
import styles from './styles';

const AuthNavigator = createStackNavigator(
  {
    LoginScreen,
    SignUpScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const MainNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      title: strings.TITLE.main,
      headerLeft: <Image source={profileIcon} style={styles.leftIcon} />,
      headerRight: <Image source={chatBubble} style={styles.rightIcon} />,
    },
  },
});

const AppNavigator = createAnimatedSwitchNavigator(
  {
    AppLoader,
    AuthNavigator,
    MainNavigator,
  },
  {
    initialRouteName: 'AppLoader',
  },
);

export default createAppContainer(AppNavigator);
