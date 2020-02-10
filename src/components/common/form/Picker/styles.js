import { StyleSheet } from 'react-native';
import { RED } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 95,
  },

  errorMessage: {
    color: RED,
    marginTop: 5,
  },

  inputAndroid: {
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    textAlign: 'center',
    width: 220,
  },

  inputIOS: {
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    textAlign: 'center',
    width: 220,
  },

  pickerError: {
    alignSelf: 'center',
    borderColor: RED,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    textAlign: 'center',
    width: 220,
  },

  title: {
    margin: 5,
    textTransform: 'uppercase',
  },
});

export default styles;
