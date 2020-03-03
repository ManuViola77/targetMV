import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { func } from 'prop-types';

import defaultProfileImage from 'assets/images/default_profile_image.png';
import { matchesShape } from 'constants/shapes';
import strings from 'locale';
import styles from './styles';

const MatchesListItem = ({ item, onPress }) => {
  const {
    lastMessage,
    user: {
      avatar: { smallThumbUrl },
      fullName,
    },
  } = item;

  const { CHAT } = strings;
  return (
    <>
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.horizontalContainer}
      >
        <Image
          source={smallThumbUrl ? { uri: smallThumbUrl } : defaultProfileImage}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{fullName} </Text>
          <Text>{lastMessage ? lastMessage : CHAT.start} </Text>
        </View>
        <Image
          source={smallThumbUrl ? { uri: smallThumbUrl } : defaultProfileImage}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.separator} />
    </>
  );
};

MatchesListItem.propTypes = {
  item: matchesShape.isRequired,
  onPress: func.isRequired,
};

MatchesListItem.defaultProps = {
  item: {},
};

export default MatchesListItem;
