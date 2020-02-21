import React, { useEffect, useRef } from 'react';
import { Image, Platform } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Circle, Marker as MapMarker } from 'react-native-maps';
import { bool, func, number, string, shape } from 'prop-types';

import {
  BLUE_TRANSPARENT,
  WHITE,
  YELLOW,
  YELLOW_TRANSPARENT,
} from 'constants/colors';
import { AVATAR_SMALL, IOS } from 'constants/common';
import {
  CIRCLE_RADIUS,
  CIRCLE_BORDER_WIDTH,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from 'constants/map';
import { locationShape, selectedTargetShape } from 'constants/shapes';
import styles from './styles';

const Marker = ({
  deleteMode,
  draggable,
  icon,
  id,
  location,
  onPress,
  radius,
  showCircle,
  target,
  uriIcon,
}) => {
  const circle = useRef(null);

  /*
  This is a temporary workaround for the following issue in react-native-maps:
  https://github.com/react-native-community/react-native-maps/issues/2698.
  */

  let getFillColor = () => {
    if (uriIcon) {
      return deleteMode ? BLUE_TRANSPARENT : YELLOW_TRANSPARENT;
    } else {
      return WHITE;
    }
  };

  const fillColor = getFillColor();

  useEffect(() => {
    if (Platform.OS === IOS && circle && circle.current) {
      circle.current.setNativeProps({
        fillColor,
        strokeColor: YELLOW,
      });
    }
  }, [circle]);

  let selectedTarget = {};
  if (target) {
    const { lat, lng } = target;
    selectedTarget = {
      ...target,
      location: {
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  return (
    <>
      {showCircle && (
        <Circle
          center={location}
          ref={circle}
          fillColor={fillColor}
          radius={uriIcon ? radius : CIRCLE_RADIUS}
          strokeColor={YELLOW}
          strokeWidth={uriIcon ? 0 : CIRCLE_BORDER_WIDTH}
        />
      )}
      <MapMarker
        anchor={uriIcon ? { x: 0.5, y: 0.5 } : { x: 0.5, y: 1 }}
        coordinate={location}
        draggable
        key={id}
        onPress={event => {
          event.stopPropagation();
          uriIcon ? onPress(selectedTarget) : null;
        }}
      >
        {uriIcon ? (
          <Avatar
            overlayContainerStyle={
              deleteMode
                ? styles.selectedUriIconContainer
                : styles.uriIconContainer
            }
            rounded
            size={AVATAR_SMALL}
            source={{ uri: uriIcon }}
          />
        ) : (
          <Image source={icon} />
        )}
      </MapMarker>
    </>
  );
};

Marker.propTypes = {
  deleteMode: bool,
  draggable: bool,
  icon: number,
  id: number.isRequired,
  location: locationShape.isRequired,
  onPress: func,
  showCircle: bool,
  target: selectedTargetShape,
  uriIcon: string,
};

export default Marker;
