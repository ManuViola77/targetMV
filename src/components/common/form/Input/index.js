import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { arrayOf, bool, func, string } from 'prop-types';

import ErrorView from 'components/common/form/ErrorView';
import styles from './styles';

const Input = ({
  autoCapitalize,
  autoCorrect,
  callback,
  editable,
  errorMessage,
  help,
  title,
  text,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        editable={editable}
        onChangeText={callback}
        placeholder={help}
        secureTextEntry={secureTextEntry}
        style={[styles.input, errorMessage ? styles.inputError : {}]}
        value={text}
      />
      {!!errorMessage && <ErrorView error={errorMessage[0]} />}
    </View>
  );
};

Input.propTypes = {
  autoCapitalize: string,
  autoCorrect: bool,
  callback: func.isRequired,
  editable: bool,
  errorMessage: arrayOf(string),
  help: string,
  secureTextEntry: bool,
  text: string.isRequired,
  title: string.isRequired,
};

Input.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  editable: true,
  errorMessage: null,
  help: '',
  secureTextEntry: false,
  text: '',
};

export default Input;
