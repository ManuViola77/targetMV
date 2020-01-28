import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Input = ({
  title,
  secureTextEntry = false,
  text,
  callback,
  errorMessage,
  help = '',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={text}
        onChangeText={callback}
        style={[styles.input, errorMessage ? styles.inputError : {}]}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={help}
      />
      {!!errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default Input;
