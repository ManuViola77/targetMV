import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import profileIcon from 'assets/images/profile.png';
import chatBubble from 'assets/images/chat_bubble.png';
import Button from 'components/common/form/Button';
import Title from 'components/common/Title';
import strings from 'locale';
import useNavigateOnLogoutEffect from 'hooks/useNavigateOnLogoutEffect';
import styles from './styles';

const Main = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  useNavigateOnLogoutEffect(navigation);

  return (
    <>
      <Title
        title={strings.TITLE.main}
        leftIcon={profileIcon}
        rightIcon={chatBubble}
      />
      <MapView style={styles.map} />
      {/* TODO delete this logout (just leaving it for testing) */}
      <Button title="Log Out (temp)" onPress={handleLogout} />
    </>
  );
};

export default Main;
