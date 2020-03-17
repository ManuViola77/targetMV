import React, { useCallback } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { useDispatch } from 'react-redux';

import { facebookLogin } from 'actions/userActions';
import { FB_PERMISSIONS } from 'constants/common';

const FBLoginButton = () => {
  const dispatch = useDispatch();
  const facebookLoginRequest = useCallback(
    fbToken => dispatch(facebookLogin(fbToken)),
    [dispatch],
  );

  return (
    <View>
      <LoginButton
        permissions={FB_PERMISSIONS}
        onLoginFinished={(error, result) => {
          if (error) {
            alert('Login failed with error: ' + error.message);
          } else if (result.isCancelled) {
            alert('Login was cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(({ accessToken }) => {
              facebookLoginRequest(accessToken);
            });
            alert(
              'Login was successful with permissions: ' +
                result.grantedPermissions,
            );
          }
        }}
        onLogoutFinished={() => alert('User logged out')}
      />
    </View>
  );
};

export default FBLoginButton;
