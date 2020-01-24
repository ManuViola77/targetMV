import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonForm = ({ title, ...props }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  </View>
);

export default ButtonForm;
