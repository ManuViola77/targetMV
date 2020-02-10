import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import {
  INITIAL_LATITUDE,
  INITIAL_LONGITUDE,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
} from 'constants/map';

const useGPSLocation = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: INITIAL_LATITUDE,
    longitude: INITIAL_LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const updateLocation = location => {
    if (
      location &&
      (location.coords.latitude !== currentLocation.latitude ||
        location.coords.longitude !== currentLocation.longitude)
    ) {
      setCurrentLocation({
        ...currentLocation,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  const requestPermission = () => {
    Platform.OS === 'android'
      ? PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
      : Geolocation.requestAuthorization();
  };

  const useWatchLocation = () => {
    useEffect(() => {
      requestPermission();
      const watchId = Geolocation.watchPosition(
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
        Geolocation.clearWatch(watchId);
        Geolocation.stopObserving();
      };
    }, [currentLocation]);
  };

  return {
    currentLocation,
    useWatchLocation,
  };
};

export default useGPSLocation;
