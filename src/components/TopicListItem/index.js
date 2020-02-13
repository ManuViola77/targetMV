import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import styles from './styles';

const TopicListItem = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.horizontalContainer}
    onPress={() => onPress(false)}>
    <Image source={{ uri: item.icon }} style={styles.icon} />
    <Text style={styles.name}>{item.label} </Text>
  </TouchableOpacity>
);

TopicListItem.propTypes = {
  item: object.isRequired,
};

export default TopicListItem;
