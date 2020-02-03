import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import LoginScreen from 'screens/LoginScreen';
import SignUpScreen from 'screens/SignUpScreen';
import MainScreen from 'screens/MainScreen';
import AppLoader from 'screens/AppLoader';

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

const MainNavigator = createStackNavigator(
  {
    MainScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

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
