import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import styles from './styles';

const ListItem = ({ item }) => (
  <TouchableOpacity
    style={styles.horizontalContainer}
    onPress={() => console.log('iteeem: ', item)}>
    <Image source={item.icon} style={styles.icon} />
    <Text style={styles.name}>{item.name} </Text>
  </TouchableOpacity>
);

ListItem.propTypes = {
  item: object.isRequired,
};

export default ListItem;
