import { StyleSheet } from 'react-native';

import { WHITE, YELLOW } from 'constants/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'constants/common';

export const profileImageSize = 60;

const styles = StyleSheet.create({
  button: {
    backgroundColor: YELLOW,
    borderColor: YELLOW,
    width: 220,
  },

  buttonText: {
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 30,
  },

  matchLogo: {
    height: 100,
    resizeMode: 'contain',
    width: 200,
  },

  modal: {
    alignItems: 'center',
    backgroundColor: WHITE,
    justifyContent: 'space-around',
    marginHorizontal: SCREEN_WIDTH * 0.06,
    marginTop: SCREEN_HEIGHT * 0.2,
    maxHeight: SCREEN_HEIGHT * 0.6,
  },

  profileImage: {
    borderRadius: profileImageSize / 2,
    height: profileImageSize,
    marginHorizontal: 15,
    width: profileImageSize,
  },

  profileImagePlaceholder: {
    height: profileImageSize,
    marginHorizontal: 15,
    width: profileImageSize,
  },

  scrollView: {
    flexGrow: 1,
  },

  text: {
    fontSize: 26,
  },

  userContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.7,
  },

  username: {
    alignSelf: 'center',
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },

  yey: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default styles;
