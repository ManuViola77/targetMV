import React, { useEffect, useRef } from 'react';
import { Image, Platform } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Circle, Marker as MapMarker } from 'react-native-maps';
import { bool, func, number, object, string, shape } from 'prop-types';

import {
  BLUE_TRANSPARENT,
  WHITE,
  YELLOW,
  YELLOW_TRANSPARENT,
} from 'constants/colors';
import { IOS } from 'constants/common';
import {
  CIRCLE_RADIUS,
  CIRCLE_BORDER_WIDTH,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from 'constants/map';
import styles from './styles';

const Marker = ({
  draggable,
  icon,
  location,
  id,
  showCircle,
  uriIcon,
  radius,
  onPress,
  deleteMode,
  target,
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

  let selectedTarget = {};
  if (target) {
    selectedTarget = {
      ...target,
      location: {
        latitude: target.lat,
        longitude: target.lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  return (
    <>
      {showCircle && (
        <Circle
          ref={circle}
          center={location}
          radius={uriIcon ? radius : CIRCLE_RADIUS}
          strokeWidth={uriIcon ? 0 : CIRCLE_BORDER_WIDTH}
          strokeColor={YELLOW}
          fillColor={
            uriIcon
              ? deleteMode
                ? BLUE_TRANSPARENT
                : YELLOW_TRANSPARENT
              : WHITE
          }
        />
      )}
      <MapMarker
        key={id}
        coordinate={location}
        draggable
        anchor={uriIcon ? { x: 0.5, y: 0.5 } : { x: 0.5, y: 1 }}
        onPress={e => {
          e.stopPropagation();
          uriIcon ? onPress(selectedTarget) : null;
        }}
      >
        {uriIcon ? (
          <Avatar
            size={25}
            rounded
            source={{ uri: uriIcon }}
            overlayContainerStyle={
              deleteMode
                ? styles.selectedUriIconContainer
                : styles.uriIconContainer
            }
            activeOpacity={0.7}
          />
        ) : (
          <Image source={icon} />
        )}
      </MapMarker>
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
  id: number.isRequired,
  onPress: func,
  showCircle: bool,
  uriIcon: string,
  deleteMode: bool,
  target: object,
};

export default Marker;
