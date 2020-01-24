import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const InputForm = ({ title, secureTextEntry }) => (
  <View style={styles.container}>
    <Text style={styles.title}> {title} </Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={title}
    />
  </View>
);

export default InputForm;
