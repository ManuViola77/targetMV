import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { object } from 'prop-types';

import { LOGIN_SCREEN, MAIN_SCREEN } from 'constants/screens';
import useSessionChangeEffect from 'hooks/useSessionChangeEffect';
import styles from './styles';

export default function AppLoader({ navigation }) {
  useSessionChangeEffect(
    ({ userId, info }) => {
      navigation.navigate(userId && info ? MAIN_SCREEN : LOGIN_SCREEN);
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
