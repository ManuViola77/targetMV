import React from 'react';
import { string } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ title, ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: string.isRequired,
};

export default Button;
