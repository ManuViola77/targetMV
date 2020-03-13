import React from 'react';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';

import arrowBack from 'assets/images/arrow_back.png';
import chatBubble from 'assets/images/chat_bubble.png';
import mark from 'assets/images/mark.png';
import profileIcon from 'assets/images/profile.png';
import NavHeader from 'components/common/NavHeader';
import { targetMatchParam } from 'constants/parameters';
import { CHAT_LIST_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import strings from 'locale';
import AppLoader from 'screens/AppLoader';
import CameraRollScreen from 'screens/CameraRollScreen';
import ChatListScreen from 'screens/ChatListScreen';
import ChatScreen from 'screens/ChatScreen';
import LoginScreen from 'screens/LoginScreen';
import MainScreen from 'screens/MainScreen';
import ProfileScreen from 'screens/ProfileScreen';
import SignUpScreen from 'screens/SignUpScreen';
import styles from './styles';

const { TITLE } = strings;

const goBackComponent = navigation => (
  <NavHeader
    icon={arrowBack}
    onPress={() => navigation.goBack()}
    style={styles.arrowBackStyle}
  />
);

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
      title: TITLE.main,
      headerLeft: (
        <NavHeader
          icon={profileIcon}
          onPress={() => navigation.push(PROFILE_SCREEN)}
          style={styles.leftIcon}
        />
      ),
      headerRight: (
        <NavHeader
          icon={chatBubble}
          onPress={() => navigation.push(CHAT_LIST_SCREEN)}
          style={styles.rightIcon}
        />
      ),
      headerStyle: {
        borderBottomWidth: 0,
      },
    }),
  },

  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: goBackComponent(navigation),
      headerRight: null,
      headerStyle: {
        borderBottomWidth: 0,
      },
      title: TITLE.profile,
    }),
  },

  CameraRollScreen: {
    screen: CameraRollScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: goBackComponent(navigation),
      headerRight: null,
      headerStyle: {
        borderBottomWidth: 0,
      },
      title: TITLE.photos,
    }),
  },

  ChatListScreen: {
    screen: ChatListScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <NavHeader
          icon={profileIcon}
          onPress={() => navigation.push(PROFILE_SCREEN)}
          style={styles.leftIcon}
        />
      ),
      headerRight: (
        <NavHeader
          icon={mark}
          onPress={() => navigation.goBack()}
          style={styles.rightIcon}
        />
      ),
      title: TITLE.chat,
    }),
  },

  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: ({
      navigation,
      navigation: {
        state: {
          params: {
            [targetMatchParam]: {
              user: {
                // TODO: when topicIcon is not null use topicIcon instead of avatar
                avatar: { smallThumbUrl },
                fullName,
              },
            },
          },
        },
      },
    }) => ({
      headerLeft: goBackComponent(navigation),
      headerRight: (
        <NavHeader iconUrl={smallThumbUrl} style={styles.rightIconUrl} />
      ),
      title: fullName,
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
