import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { func } from 'prop-types';

import { topicItemShape } from 'constants/shapes';
import styles from './styles';

const TopicListItem = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(item, false)}
    style={styles.horizontalContainer}
  >
    <Image source={{ uri: item.icon }} style={styles.icon} />
    <Text style={styles.name}>{item.label} </Text>
  </TouchableOpacity>
);

TopicListItem.propTypes = {
  item: topicItemShape.isRequired,
  onPress: func.isRequired,
};

TopicListItem.defaultProps = {
  item: {},
};

export default TopicListItem;
