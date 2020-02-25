import { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

import { INITIAL_LOCATION } from 'constants/map';
import requestPermission from 'hooks/useLocationPermission';

const useGPSLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(INITIAL_LOCATION);

  const [currentLocationOnMap, setCurrentLocationOnMap] = useState(false);

  const updateLocation = location => {
    setCurrentLocation({
      ...currentLocation,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  useEffect(() => {
    requestPermission();
    const watchId = Geolocation.watchPosition(
      location => updateLocation(location),
      error => console.warn('error: ', error),
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
        distanceInterval: 10,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
    return () => {
      Geolocation.clearWatch(watchId);
      Geolocation.stopObserving();
    };
  }, []);

  return {
    currentLocation,
    currentLocationOnMap,
    setCurrentLocationOnMap,
  };
};

export default useGPSLocation;
