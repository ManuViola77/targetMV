import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

// TODO: import styles from './styles';
import Button from 'components/common/form/Button';
import { logout } from 'actions/userActions';
import useNavigateOnLogoutEffect from 'hooks/useNavigateOnLogoutEffect';

// TODO: Make the real Main Screen
// The logout button is just to test easier the login and sign up feature
const Main = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  useNavigateOnLogoutEffect(navigation);

  return (
    <>
      <Text>This is Main Screen to be implemented later</Text>
      <Button title="Log Out (temp)" onPress={handleLogout} />
    </>
  );
};

export default Main;
