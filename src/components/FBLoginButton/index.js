import React, { useCallback } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { useDispatch } from 'react-redux';

import { facebookLogin } from 'actions/userActions';
import { FB_PERMISSIONS } from 'constants/common';
import strings from 'locale';
import styles from './styles';

const FBLoginButton = ({ onPress }) => {
  const { FACEBOOK_LOGIN } = strings;
  const dispatch = useDispatch();

  const facebookLoginRequest = useCallback(
    fbToken => dispatch(facebookLogin(fbToken)),
    [dispatch],
  );

  const postLogin = async (error, result) => {
    if (error) {
      alert(`${FACEBOOK_LOGIN.error}${error.message}`);
    } else if (result.isCancelled) {
      alert(FACEBOOK_LOGIN.cancel);
    } else {
      const { accessToken } = await AccessToken.getCurrentAccessToken();
      facebookLoginRequest(accessToken);
    }
  };

  return (
    <View style={styles.container}>
      <LoginButton
        permissions={FB_PERMISSIONS}
        onLoginFinished={postLogin}
        onLogoutFinished={onPress}
      />
    </View>
  );
};

export default FBLoginButton;
