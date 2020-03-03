import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { bool, func, number, object } from 'prop-types';

const NavHeader = ({ icon, isUri, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={isUri ? { uri: icon } : icon} style={style} />
  </TouchableOpacity>
);

NavHeader.propTypes = {
  icon: number,
  isUri: bool,
  onPress: func.isRequired,
  style: object,
};

NavHeader.defaultProps = {
  isUri: false,
  style: {},
};

export default NavHeader;
