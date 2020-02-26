import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { arrayOf, func, string } from 'prop-types';

import { pickerShape } from 'constants/shapes';
import styles from './styles';

const Picker = ({
  callback,
  errorMessage,
  options,
  placeholder,
  text,
  title,
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
        items={options}
        onValueChange={callback}
        placeholder={placeholder}
        style={{ ...stylePicker }}
        useNativeAndroidPickerStyle={false}
        value={text}
      />
      {!!errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

Picker.propTypes = {
  callback: func.isRequired,
  errorMessage: arrayOf(string),
  options: arrayOf(pickerShape).isRequired,
  placeholder: pickerShape.isRequired,
  text: string.isRequired,
  title: string.isRequired,
};

Picker.defaultProps = {
  text: '',
};

export default Picker;
