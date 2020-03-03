import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { func, number, object, string } from 'prop-types';

const NavHeader = ({ icon, iconUrl, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={iconUrl ? { uri: iconUrl } : icon} style={style} />
  </TouchableOpacity>
);

NavHeader.propTypes = {
  icon: number,
  iconUrl: string,
  onPress: func.isRequired,
  style: object,
};

NavHeader.defaultProps = {
  style: {},
};

export default NavHeader;
