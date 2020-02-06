import { useState } from 'react';
import GetLocation from 'react-native-get-location';

import {
  INITIAL_LATITUDE,
  INITIAL_LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  TIMEOUT,
} from 'constants/map';

const useGPSLocation = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const requestLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: TIMEOUT,
    })
      .then(location => {
        location.latitude !== currentLocation.latitude ||
        location.longitude !== currentLocation.longitude
          ? setCurrentLocation({
              ...currentLocation,
              latitude: location.latitude,
              longitude: location.longitude,
            })
          : null;
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      });
  };

  return {
    currentLocation,
    requestLocation,
  };
};

export default useGPSLocation;
