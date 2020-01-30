import React from 'react';
import { bool, string, array, object, func } from 'prop-types';
import { View, Text, PickerRN } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
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
    ? { ...styles, inputIOS: styles.pickerError }
    : { ...styles };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <RNPickerSelect
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
