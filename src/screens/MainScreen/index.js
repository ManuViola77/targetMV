import React, { useCallback, useEffect } from 'react';
import MapView from 'react-native-maps';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import profileIcon from 'assets/images/profile.png';
import chatBubble from 'assets/images/chat_bubble.png';
import Button from 'components/common/form/Button';
import Title from 'components/common/Title';
import strings from 'locale';
import useGPSLocation from 'hooks/useGPSLocation';
import useNavigateOnLogoutEffect from 'hooks/useNavigateOnLogoutEffect';
import styles from './styles';

const Main = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  useNavigateOnLogoutEffect(navigation);

  const { currentLocation, requestLocation, startTracking } = useGPSLocation();

  requestLocation();

  /* useEffect(() => {
    startTracking();
  }, []); */

  return (
    <>
      <Title
        title={strings.TITLE.main}
        leftIcon={profileIcon}
        rightIcon={chatBubble}
      />
      <MapView
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
