import { StyleSheet } from 'react-native';

const ICON_SIZE = 30;

const styles = StyleSheet.create({
  arrowBackStyle: {
    marginLeft: 30,
  },

  leftIcon: {
    marginLeft: 20,
  },

  rightIcon: {
    marginRight: 20,
  },

  rightIconUrl: {
    borderRadius: ICON_SIZE / 2,
    height: ICON_SIZE,
    marginRight: 20,
    width: ICON_SIZE,
  },
});

export default styles;
