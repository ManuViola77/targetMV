import { StyleSheet } from 'react-native';

import { WHITE, YELLOW_TRANSPARENT } from 'constants/colors';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from 'constants/common';

export const AVATAR_SIZE = 30;
export const CIRCLE_SIZE = 100;

const styles = StyleSheet.create({
  circleView: {
    alignSelf: 'center',
    backgroundColor: YELLOW_TRANSPARENT,
    borderRadius: CIRCLE_SIZE / 2,
    height: CIRCLE_SIZE,
    justifyContent: 'center',
    width: CIRCLE_SIZE,
  },

  confirmText: {
    fontSize: 20,
    marginTop: 15,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 40,
  },

  icon: {
    backgroundColor: YELLOW_TRANSPARENT,
  },

  iconContainer: {
    alignSelf: 'center',
  },

  modal: {
    alignItems: 'center',
    backgroundColor: WHITE,
    justifyContent: 'space-around',
    marginHorizontal: WINDOW_WIDTH / 10,
    marginTop: WINDOW_HEIGHT / 6,
    maxHeight: (5 * WINDOW_HEIGHT) / 8,
  },

  rememberText: {
    fontSize: 16,
    textAlign: 'center',
  },

  targetTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
