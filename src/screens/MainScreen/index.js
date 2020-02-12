import React, { useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import location_marker from 'assets/images/location_marker.png';
import Button from 'components/common/form/Button';
import Marker from 'components/common/Marker';
import useGPSLocation from 'hooks/useGPSLocation';
import useNavigateOnLogoutEffect from 'hooks/useNavigateOnLogoutEffect';
import strings from 'locale';
import styles from './styles';

{
  /* TODO delete this import (just leaving it for testing) */
}
import List from 'components/TopicList';

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
          icon={location_marker}
          location={currentLocation}
          markerKey={0}
          showCircle
        />
      </MapView>
      {/* TODO delete logout and list (just leaving it for testing) */}
      <List list={strings.TOPICS.topics} />
      <Button title="Log Out (temp)" onPress={handleLogout} />
    </>
  );
};

export default Main;
