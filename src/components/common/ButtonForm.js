import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonForm = ({title}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    height: 40,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export {ButtonForm};
