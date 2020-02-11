import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const requestPermission = () => {
  Platform.OS === 'android'
    ? PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
    : Geolocation.requestAuthorization();
};

export default requestPermission;
