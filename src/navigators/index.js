import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';

import arrow_back from 'assets/images/arrow_back.png';
import chatBubble from 'assets/images/chat_bubble.png';
import profileIcon from 'assets/images/profile.png';
import { PROFILE_SCREEN } from 'constants/screens';
import strings from 'locale';
import AppLoader from 'screens/AppLoader';
import LoginScreen from 'screens/LoginScreen';
import MainScreen from 'screens/MainScreen';
import ProfileScreen from 'screens/ProfileScreen';
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
    navigationOptions: ({ navigation }) => ({
      title: strings.TITLE.main,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.push(PROFILE_SCREEN)}>
          <Image source={profileIcon} style={styles.leftIcon} />
        </TouchableOpacity>
      ),
      headerRight: <Image source={chatBubble} style={styles.rightIcon} />,
      headerStyle: {
        borderBottomWidth: 0,
      },
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrow_back} style={styles.arrowBackStyle} />
        </TouchableOpacity>
      ),
      headerStyle: {
        borderBottomWidth: 0,
      },
      title: strings.TITLE.profile,
    }),
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
