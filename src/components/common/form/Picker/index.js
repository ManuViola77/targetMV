import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { string, array, object, func } from 'prop-types';

import styles from './styles';

const Picker = ({
  title,
  text,
  placeholder,
  options,
  callback,
  errorMessage,
}) => {
  var stylePicker = errorMessage
    ? {
        ...styles,
        inputIOS: styles.pickerError,
        inputAndroid: styles.pickerError,
      }
    : { ...styles };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        placeholder={placeholder}
        items={options}
        onValueChange={callback}
        value={text}
        style={{ ...stylePicker }}
      />
      {!!errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

Picker.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  placeholder: object.isRequired,
  options: array.isRequired,
  callback: func.isRequired,
  errorMessage: array,
};

Picker.defaultProps = {
  text: '',
  errorMessage: null,
};

export default Picker;
