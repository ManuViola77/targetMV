import React from 'react';
import { bool, string, array, func } from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import ErrorView from 'components/common/form/ErrorView';

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
      {!!errorMessage && <ErrorView error={errorMessage[0]} />}
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
  text: '',
  errorMessage: null,
  autoCapitalize: 'none',
  autoCorrect: false,
  help: '',
};

export default Input;
