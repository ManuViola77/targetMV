import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ title, ...props }) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.text}> {title} </Text>
  </TouchableOpacity>
);

export default Button;
