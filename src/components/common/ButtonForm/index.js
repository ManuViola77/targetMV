import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonForm = ({ title }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  </View>
);

export default ButtonForm;
