import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: BLACK,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    width: 110,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },

  text: {
    color: WHITE,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
