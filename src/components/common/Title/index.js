import React from 'react';
import { Image, Text, View } from 'react-native';
import { number, string } from 'prop-types';

import styles from './styles';

const Title = ({ title, leftIcon, rightIcon }) => (
  <View style={styles.horizontalContainer}>
    <Image source={leftIcon} style={styles.leftIcon} />
    <Text style={styles.title}>{title}</Text>
    <Image source={rightIcon} style={styles.rightIcon} />
  </View>
);

Title.propTypes = {
  leftIcon: number,
  rightIcon: number,
  title: string.isRequired,
};

export default Title;
