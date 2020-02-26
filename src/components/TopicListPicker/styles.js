import { StyleSheet } from 'react-native';

import { GREY, RED, BLACK, WHITE } from 'constants/colors';
import { TOPICS_HEIGHT } from 'constants/common';

const styles = StyleSheet.create({
  box: {
    borderColor: BLACK,
    borderWidth: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: 260,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 95,
  },

  error: {
    borderColor: RED,
  },

  hint: {
    color: GREY,
  },

  icon: {
    alignSelf: 'center',
    height: 20,
    padding: 5,
    width: 20,
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
    fontSize: 16,
    padding: 8,
    textAlign: 'center',
  },

  title: {
    margin: 5,
    textTransform: 'uppercase',
  },
});

export default styles;
