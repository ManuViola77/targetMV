import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { object, func } from 'prop-types';

import styles from './styles';

const TopicListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.horizontalContainer}
      onPress={() => onPress(item, false)}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.name}>{item.label} </Text>
    </TouchableOpacity>
  );
};

TopicListItem.propTypes = {
  item: object.isRequired,
  onPress: func.isRequired,
};

TopicListItem.defaultProps = {
  item: {},
};

export default TopicListItem;
