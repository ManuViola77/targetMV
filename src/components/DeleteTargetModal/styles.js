import { Dimensions, StyleSheet } from 'react-native';

import { WHITE, YELLOW_TRANSPARENT } from 'constants/colors';

const styles = StyleSheet.create({
  circleView: {
    alignSelf: 'center',
    backgroundColor: YELLOW_TRANSPARENT,
    borderRadius: 100 / 2,
    height: 100,
    justifyContent: 'center',
    width: 100,
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
    marginHorizontal: Dimensions.get('window').width / 10,
    marginTop: Dimensions.get('window').height / 6,
    maxHeight: (5 * Dimensions.get('window').height) / 8,
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
