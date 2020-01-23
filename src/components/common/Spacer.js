import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = () => <View style={styles.spacer} />;

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export {Spacer};
