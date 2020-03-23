import React from 'react';
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const Button = ({ title, style, textStyle, ...props }) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  style: ViewPropTypes.style,
  title: string.isRequired,
};

export default Button;
