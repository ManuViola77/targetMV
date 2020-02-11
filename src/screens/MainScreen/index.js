import React, { useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import location_marker from 'assets/images/location_marker.png';
import Button from 'components/common/form/Button';
import Marker from 'components/common/Marker';
import useGPSLocation from 'hooks/useGPSLocation';
import useNavigateOnLogoutEffect from 'hooks/useNavigateOnLogoutEffect';
import styles from './styles';

const Main = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  useNavigateOnLogoutEffect(navigation);

  const { currentLocation, useWatchLocation } = useGPSLocation();

  useWatchLocation();

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showUserLocation
        followUserLocation
        loadingEnabled
        region={currentLocation}>
        <Marker
          location={currentLocation}
          icon={location_marker}
          showCircle={true}
        />
      </MapView>
      {/* TODO delete this logout (just leaving it for testing) */}
      <Button title="Log Out (temp)" onPress={handleLogout} />
    </>
  );
};

export default Main;
