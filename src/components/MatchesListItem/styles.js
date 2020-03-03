import { StyleSheet } from 'react-native';

import { GREY } from 'constants/colors';

const AVATAR_SIZE = 60;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: AVATAR_SIZE / 2,
    height: AVATAR_SIZE,
    margin: 10,
    marginLeft: 20,
    width: AVATAR_SIZE,
  },

  horizontalContainer: {
    flexDirection: 'row',
  },

  icon: {
    height: 20,
    margin: 10,
    marginLeft: 20,
    width: 20,
  },

  name: {
    margin: 10,
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: GREY,
  },
});

export default styles;
