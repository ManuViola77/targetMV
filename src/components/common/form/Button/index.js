import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { string, object } from 'prop-types';

import styles from './styles';

const Button = ({ title, style, ...props }) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  style: object,
  title: string.isRequired,
};

export default Button;
