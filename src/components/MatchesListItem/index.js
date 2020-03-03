import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { func } from 'prop-types';

import defaultProfileImage from 'assets/images/default_profile_image.png';
import { matchesShape } from 'constants/shapes';
import styles from './styles';

const MatchesListItem = ({ item, onPress }) => {
  const {
    user: {
      avatar: { smallThumbUrl },
      fullName,
    },
  } = item;
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
        <Text style={styles.name}>{fullName} </Text>
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
