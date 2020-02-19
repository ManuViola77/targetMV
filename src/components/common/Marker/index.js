import React from 'react';
import { Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import MapView, { Marker as MapMarker } from 'react-native-maps';
import { bool, number, object, string, func } from 'prop-types';

import {
  BLUE_TRANSPARENT,
  WHITE,
  YELLOW,
  YELLOW_TRANSPARENT,
} from 'constants/colors';
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
        <MapView.Circle
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
        coordinate={
          uriIcon
            ? { ...location, latitude: location.latitude - 0.00035 }
            : location
        }
        onLoad={() => this.forceUpdate()}
        draggable
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
  location: object.isRequired,
  id: number.isRequired,
  onPress: func,
  showCircle: bool,
  uriIcon: string,
  deleteMode: bool,
  target: object,
};

export default Marker;
