import React from 'react';
import { bool, number, string, array, arrayOf, object } from 'prop-types';
import { View, Text, Picker as PickerRN } from 'react-native';
import styles from './styles';

/*
  
*/

const Picker = ({ title, text, options, callback, errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <PickerRN
        style={[styles.picker, errorMessage ? styles.pickerError : {}]}
        itemStyle={styles.pickerItem}
        selectedValue={text}
        onValueChange={callback}>
        {options.map((item, index) => {
          return (
            <PickerRN.Item label={item.label} value={item.value} key={index} />
          );
        })}
      </PickerRN>
      {!!errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

Picker.propTypes = {
  title: string,
};

Picker.defaultProps = {
  title: 'hola',
};

export default Picker;
