import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/colors';
import { SUB_VIEW_HEIGHT } from 'constants/targetActions';

const styles = StyleSheet.create({
  map: {
    flex: 1,
    marginBottom: 10,
  },

  newTarget: {
    alignItems: 'center',
    margin: 10,
  },

  subView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: WHITE,
    height: SUB_VIEW_HEIGHT,
  },

  text: {
    fontSize: 16,
    margin: 20,
    textTransform: 'uppercase',
  },
});

export default styles;
