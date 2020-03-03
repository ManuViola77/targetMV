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
    justifyContent: 'space-between',
  },

  icon: {
    alignSelf: 'center',
    height: 30,
    margin: 10,
    marginRight: 20,
    width: 30,
  },

  name: {
    fontWeight: 'bold',
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: GREY,
  },

  textContainer: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'space-around',
    margin: 10,
  },
});

export default styles;
