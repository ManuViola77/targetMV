import React from 'react';
import { Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import MapView, { Marker as MapMarker } from 'react-native-maps';
import { bool, number, string, shape } from 'prop-types';

import { WHITE, YELLOW, YELLOW_TRANSPARENT } from 'constants/colors';
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
}) => (
  <>
    <MapMarker
      key={markerKey}
      coordinate={
        uriIcon
          ? { ...location, latitude: location.latitude - 0.00035 }
          : location
      }
      onLoad={() => this.forceUpdate()}
      draggable
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
      <MapView.Circle
        center={location}
        radius={uriIcon ? radius : CIRCLE_RADIUS}
        strokeWidth={uriIcon ? 0 : CIRCLE_BORDER_WIDTH}
        strokeColor={YELLOW}
        fillColor={uriIcon ? YELLOW_TRANSPARENT : WHITE}
      />
    )}
  </>
);

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
