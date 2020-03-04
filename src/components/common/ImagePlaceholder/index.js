import React from 'react';
import { Image, ViewPropTypes } from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import { number, string } from 'prop-types';

const ImagePlaceholder = ({
  borderRadius,
  icon,
  iconUrl,
  placeholder,
  placeholderStyle,
  style,
}) => (
  <>
    {iconUrl ? (
      <ImageLoad
        borderRadius={borderRadius}
        placeholderSource={placeholder}
        placeholderStyle={placeholderStyle}
        source={{ uri: iconUrl }}
        style={style}
      />
    ) : (
      <Image source={icon} style={style} />
    )}
  </>
);

ImagePlaceholder.propTypes = {
  borderRadius: number,
  icon: number,
  iconUrl: string,
  placeholder: number,
  placeholderStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
};

ImagePlaceholder.defaultProps = {
  placeholderStyle: {},
  style: {},
};

export default ImagePlaceholder;
