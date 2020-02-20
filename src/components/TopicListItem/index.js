import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { func, number, shape, string } from 'prop-types';

import styles from './styles';

const TopicListItem = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.horizontalContainer}
    onPress={() => onPress(item, false)}
  >
    <Image source={{ uri: item.icon }} style={styles.icon} />
    <Text style={styles.name}>{item.label} </Text>
  </TouchableOpacity>
);

TopicListItem.propTypes = {
  item: shape({
    icon: string,
    id: number,
    label: string,
  }).isRequired,
  onPress: func.isRequired,
};

TopicListItem.defaultProps = {
  item: {},
};

export default TopicListItem;
