import { StyleSheet } from 'react-native';

import { GREY, RED, BLACK, WHITE } from 'constants/colors';
import { TOPICS_HEIGHT } from 'constants/targetActions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 95,
  },

  hint: {
    color: GREY,
  },

  subView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: WHITE,
    height: TOPICS_HEIGHT,
  },

  text: {
    borderColor: BLACK,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    padding: 5,
    textAlign: 'center',
    width: 260,
  },

  textError: {
    borderColor: RED,
  },

  title: {
    margin: 5,
    textTransform: 'uppercase',
  },
});

export default styles;
