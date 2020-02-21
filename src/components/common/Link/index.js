import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';

import styles from './styles';

const Link = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

Link.propTypes = {
  onPress: func.isRequired,
  text: string.isRequired,
};

export default Link;
