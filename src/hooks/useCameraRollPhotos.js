import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

import { ANDROID, GRANTED } from 'constants/common';
import strings from 'locale';

const useCameraRollPhotos = () => {
  const [photos, setPhotos] = useState({ data: '' });

  const { PHOTO_PERMISSION } = strings;

  const setPhotosState = async () => {
    if (Platform.OS === ANDROID) {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: PHOTO_PERMISSION.title,
          message: PHOTO_PERMISSION.message,
        },
      );
      if (result !== GRANTED) {
        console.log('Access to pictures was denied');
      }
    }

    try {
      const { edges } = await CameraRoll.getPhotos({
        first: 50,
        assetType: 'Photos',
        groupTypes: 'All',
      });
      setPhotos({ data: edges });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPhotosState();
  }, []);

  return photos;
};

export default useCameraRollPhotos;
