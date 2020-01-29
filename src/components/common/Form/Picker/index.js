import React from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles';

const MyPicker = ({ title, text, options, callback, errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Picker
        style={[styles.picker, errorMessage ? styles.pickerError : {}]}
        itemStyle={styles.pickerItem}
        selectedValue={text}
        onValueChange={callback}>
        {options.map((item, index) => {
          return (
            <Picker.Item label={item.label} value={item.value} key={index} />
          );
        })}
      </Picker>
      {!!errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default MyPicker;
