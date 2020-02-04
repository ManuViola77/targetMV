import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { object } from 'prop-types';

import { LOGIN_SCREEN, MAIN_SCREEN } from 'constants/screens';
import useSessionChangeEffect from 'hooks/useSessionChangeEffect';
import styles from './styles';

export default function AppLoader({ navigation }) {
  useSessionChangeEffect(
    ({ user, info }) => {
      if (user && info) {
        navigation.navigate(MAIN_SCREEN);
      } else {
        navigation.navigate(LOGIN_SCREEN);
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

AppLoader.propTypes = {
  navigation: object.isRequired,
};
