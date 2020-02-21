import React from 'react';
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const Button = ({ title, style, ...props }) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  style: ViewPropTypes.style,
  title: string.isRequired,
};

export default Button;
