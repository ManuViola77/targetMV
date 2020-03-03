import { StyleSheet } from 'react-native';

import { GREY } from 'constants/colors';

const AVATAR_SIZE = 60;
const BADGE_SIZE = 24;
const ICON_SIZE = 40;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: AVATAR_SIZE / 2,
    height: AVATAR_SIZE,
    margin: 10,
    marginLeft: 20,
    width: AVATAR_SIZE,
  },

  badge: {
    borderRadius: BADGE_SIZE / 2,
    height: BADGE_SIZE,
    minWidth: 0,
    width: BADGE_SIZE,
  },

  badgeContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: -20,
    top: 10,
  },

  badgeText: {
    fontSize: 14,
    paddingHorizontal: 0,
  },

  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon: {
    alignSelf: 'center',
    height: ICON_SIZE,
    margin: 10,
    marginRight: 20,
    width: ICON_SIZE,
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

  topicBadge: {
    justifyContent: 'center',
  },
});

export default styles;
