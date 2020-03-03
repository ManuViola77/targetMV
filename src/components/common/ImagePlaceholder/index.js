import React from 'react';
import { Image } from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

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

export default ImagePlaceholder;
