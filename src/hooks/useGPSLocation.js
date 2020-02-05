import { useState } from 'react';
import GetLocation from 'react-native-get-location';
//import Geolocation from '@react-native-community/geolocation';

import { LATITUDE_DELTA, LONGITUDE_DELTA } from 'constants/map';

const useGPSLocation = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: -34.901112,
    longitude: -56.164532,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const requestLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log('en requestLocation');
        console.log(location);
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

  const startTracking = () => {
    console.log('en startTracking');
    //Geolocation.getCurrentPosition(info => console.log(info));
    /* watchID = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;

        console.log('en watchPosition');
        console.log(position);

        setCurrentLocation({
          ...currentLocation,
          latitude,
          longitude,
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    ); */
  };

  return {
    currentLocation,
    requestLocation,
    startTracking,
  };
};

export default useGPSLocation;
