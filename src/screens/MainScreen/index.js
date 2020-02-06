import React, { useCallback, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import Button from 'components/common/form/Button';
import useGPSLocation from 'hooks/useGPSLocation';
import useNavigateOnLogoutEffect from 'hooks/useNavigateOnLogoutEffect';
import styles from './styles';

const Main = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  useNavigateOnLogoutEffect(navigation);

  const { currentLocation, requestLocation } = useGPSLocation();

  requestLocation();

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showUserLocation
        followUserLocation
        loadingEnabled
        region={currentLocation}
      />
      {/* TODO delete this logout (just leaving it for testing) */}
      <Button title="Log Out (temp)" onPress={handleLogout} />
    </>
  );
};

export default Main;
