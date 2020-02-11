import React from 'react';
import { Image } from 'react-native';
import MapView, { Marker as MapMarker } from 'react-native-maps';

import { WHITE, YELLOW } from 'constants/colors';
import { CIRCLE_RADIUS, CIRCLE_BORDER_WIDTH } from 'constants/map';
import { bool, number, object } from 'prop-types';

const Marker = ({ location, icon, showCircle }) => (
  <>
    <MapMarker key={0} coordinate={location}>
      <Image source={icon} />
    </MapMarker>
    {showCircle ? (
      <MapView.Circle
        center={location}
        radius={CIRCLE_RADIUS}
        strokeWidth={CIRCLE_BORDER_WIDTH}
        strokeColor={YELLOW}
        fillColor={WHITE}
      />
    ) : null}
  </>
);

Marker.propTypes = {
  location: object.isRequired,
  icon: number.isRequired,
  showCircle: bool,
};

export default Marker;
