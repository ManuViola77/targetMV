import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: BLACK,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    margin: 15,
    width: 110,
  },

  text: {
    color: WHITE,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
