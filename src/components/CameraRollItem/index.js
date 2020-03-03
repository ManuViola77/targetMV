import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const CameraRollItem = ({ onPress, height, uri, width }) => (
  <TouchableOpacity
    onPress={() => onPress(height, uri, width)}
    style={styles.container}
  >
    <Image style={styles.image} source={{ uri }} />
  </TouchableOpacity>
);

export default CameraRollItem;
