import React from 'react';
import { bool, string, array, func } from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

/*
  Input Props:
  title(*): label for the input title
  secureTextEntry: use secureTextEntry or not
  text(*): value of input (is the state value)
  callback(*): function to change state value
  errorMessage: array of error messages for the input
  autoCapitalize: type of autoCapitalize to use
  autoCorrect: use autoCorrect or not
  help: text for the input placeholder
*/

const Input = ({
  title,
  secureTextEntry,
  text,
  callback,
  errorMessage,
  autoCapitalize,
  autoCorrect,
  help,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={text}
        onChangeText={callback}
        style={[styles.input, errorMessage ? styles.inputError : {}]}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        placeholder={help}
      />
      {!!errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage[0]}</Text>
      )}
    </View>
  );
};

Input.propTypes = {
  title: string.isRequired,
  secureTextEntry: bool,
  text: string.isRequired,
  callback: func.isRequired,
  errorMessage: array,
  autoCapitalize: string,
  autoCorrect: bool,
  help: string,
};

Input.defaultProps = {
  secureTextEntry: false,
  errorMessage: null,
  autoCapitalize: 'none',
  autoCorrect: false,
  help: '',
};

export default Input;
