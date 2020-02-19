import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { arrayOf, bool, func, string } from 'prop-types';

import ErrorView from 'components/common/form/ErrorView';
import styles from './styles';

const Input = ({
  title,
  secureTextEntry,
  text,
  callback,
  errorMessage,
  autoCapitalize,
  autoCorrect,
  help,
  editable,
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
        editable={editable}
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
  errorMessage: arrayOf(string),
  autoCapitalize: string,
  autoCorrect: bool,
  help: string,
  editable: bool,
};

Input.defaultProps = {
  secureTextEntry: false,
  text: '',
  errorMessage: null,
  autoCapitalize: 'none',
  autoCorrect: false,
  help: '',
  editable: true,
};

export default Input;
