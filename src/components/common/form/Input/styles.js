import { StyleSheet } from 'react-native';
import { RED, BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 95,
  },

  input: {
    borderColor: BLACK,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    padding: 5,
    textAlign: 'center',
    width: 260,
  },

  inputError: {
    borderColor: RED,
  },

  title: {
    margin: 5,
    textTransform: 'uppercase',
  },
});

export default styles;
