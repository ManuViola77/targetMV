import React, { useEffect, useRef } from 'react';
import { Image, Platform } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Circle, Marker as MapMarker } from 'react-native-maps';
import { bool, number, string, shape } from 'prop-types';

import { WHITE, YELLOW, YELLOW_TRANSPARENT } from 'constants/colors';
import { IOS } from 'constants/common';
import { CIRCLE_RADIUS, CIRCLE_BORDER_WIDTH } from 'constants/map';
import styles from './styles';

const Marker = ({
  draggable,
  icon,
  location,
  markerKey,
  showCircle,
  uriIcon,
  radius,
}) => {
  const circle = useRef(null);

  /*
  This is a temporary workaround for the following issue in react-native-maps:
  https://github.com/react-native-community/react-native-maps/issues/2698.
  */
  useEffect(() => {
    if (Platform.OS === IOS && circle && circle.current) {
      circle.current.setNativeProps({
        fillColor: uriIcon ? YELLOW_TRANSPARENT : WHITE,
        strokeColor: YELLOW,
      });
    }
  }, [circle]);

  return (
    <>
      <MapMarker
        key={markerKey}
        coordinate={location}
        draggable
        anchor={uriIcon ? { x: 0.5, y: 0.5 } : { x: 0.5, y: 1 }}
      >
        {uriIcon ? (
          <Avatar
            size={25}
            rounded
            source={{ uri: uriIcon }}
            overlayContainerStyle={styles.uriIconContainer}
            activeOpacity={0.7}
          />
        ) : (
          <Image source={icon} />
        )}
      </MapMarker>
      {showCircle && (
        <Circle
          ref={circle}
          center={location}
          radius={uriIcon ? radius : CIRCLE_RADIUS}
          strokeWidth={uriIcon ? 0 : CIRCLE_BORDER_WIDTH}
          strokeColor={YELLOW}
          fillColor={uriIcon ? YELLOW_TRANSPARENT : WHITE}
        />
      )}
    </>
  );
};

Marker.propTypes = {
  draggable: bool,
  icon: number,
  location: shape({
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
  }).isRequired,
  markerKey: number.isRequired,
  showCircle: bool,
  uriIcon: string,
};

export default Marker;
