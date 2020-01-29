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

  picker: {
    alignSelf: 'center',
    borderWidth: 1,
    height: 40,
    width: 220,
  },

  pickerError: {
    borderColor: RED,
  },

  pickerItem: {
    height: 40,
    fontSize: 16,
  },

  title: {
    margin: 5,
    textTransform: 'uppercase',
  },
});

export default styles;
