import { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

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

  const updateLocation = location => {
    location
      ? setCurrentLocation({
          ...currentLocation,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      : null;
  };

  const useWatchLocation = () => {
    useEffect(() => {
      Geolocation.watchPosition(
        location => updateLocation(location),
        error => console.warn('error: ', error),
        {
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
        },
      );
      return () => {
        Geolocation.stopObserving();
      };
    }, []);
  };

  return {
    currentLocation,
    useWatchLocation,
  };
};

export default useGPSLocation;
