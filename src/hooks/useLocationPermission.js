import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { ANDROID } from 'constants/common';

const requestPermission = () => {
  Platform.OS === ANDROID
    ? PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
    : Geolocation.requestAuthorization();
};

export default requestPermission;
