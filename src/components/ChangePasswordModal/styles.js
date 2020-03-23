import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'constants/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginTop: 30,
  },

  modal: {
    alignItems: 'center',
    backgroundColor: WHITE,
    justifyContent: 'space-around',
    marginHorizontal: SCREEN_WIDTH * 0.06,
    marginTop: SCREEN_HEIGHT * 0.2,
    maxHeight: SCREEN_HEIGHT * 0.6,
  },

  scrollView: {
    flexGrow: 1,
  },
});

export default styles;
