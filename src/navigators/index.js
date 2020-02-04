import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';

import AppLoader from 'screens/AppLoader';
import LoginScreen from 'screens/LoginScreen';
import MainScreen from 'screens/MainScreen';
import SignUpScreen from 'screens/SignUpScreen';

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
