import React, { useEffect, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import RNFS from 'react-native-fs';
import { useNavigationParam } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import ImageEditor from '@react-native-community/image-editor';

import { updateProfile } from 'actions/profileActions';
import CameraRollItem from 'components/CameraRollItem';
import {
  avatar as avatarField,
  profile as profileParam,
} from 'constants/fields';
import useCameraRollPhotos from 'hooks/useCameraRollPhotos';

const CameraRollScreen = ({ navigation }) => {
  const {
    photos: { data: photosCamera },
    setPhotosState,
  } = useCameraRollPhotos();

  setPhotosState();

  const profile = useNavigationParam(profileParam);
  const dispatch = useDispatch();
  const userId = useSelector(({ session: { userId } }) => userId);

  const base64 = 'base64';
  const base64Data = `data:image/jpeg;${base64},`;

  const changeAvatar = imageBase64 => {
    dispatch(
      updateProfile(userId, {
        ...profile,
        [avatarField]: `${base64Data}${imageBase64}`,
      }),
    );
    navigation.goBack();
  };

  const getBase64 = async uri => {
    await RNFS.readFile(uri, base64).then(image64 => {
      changeAvatar(image64);
    });
  };

  const changeAvatarRequest = (height, uri, width) => {
    ImageEditor.cropImage(uri, {
      offset: { x: 0, y: 0 },
      size: { width: width, height: height },
    }).then(url => {
      getBase64(url);
    });
  };

  return (
    <View>
      <FlatList
        data={photosCamera}
        keyExtractor={({
          node: {
            image: { filename },
          },
        }) => filename}
        numColumns={3}
        renderItem={({
          item: {
            node: {
              image: { height, uri, width },
            },
          },
        }) => (
          <CameraRollItem
            onPress={changeAvatarRequest}
            height={height}
            uri={uri}
            width={width}
          />
        )}
      />
    </View>
  );
};

export default CameraRollScreen;
