import React from 'react';
import { Image } from 'react-native';
import MapView, { Marker as MapMarker } from 'react-native-maps';

import { WHITE, YELLOW } from 'constants/colors';
import { CIRCLE_RADIUS, CIRCLE_BORDER_WIDTH } from 'constants/map';
import { bool, number, object } from 'prop-types';

const Marker = ({ icon, location, markerKey, showCircle }) => (
  <>
    <MapMarker key={markerKey} coordinate={location}>
      <Image source={icon} />
    </MapMarker>
    {showCircle && (
      <MapView.Circle
        center={location}
        radius={CIRCLE_RADIUS}
        strokeWidth={CIRCLE_BORDER_WIDTH}
        strokeColor={YELLOW}
        fillColor={WHITE}
      />
    )}
  </>
);

Marker.propTypes = {
  icon: number.isRequired,
  location: object.isRequired,
  markerKey: number.isRequired,
  showCircle: bool,
};

export default Marker;
