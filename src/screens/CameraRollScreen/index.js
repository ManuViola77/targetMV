import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import RNFS from 'react-native-fs';
import { useNavigationParam } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  useStatus,
  LOADING,
  NOT_STARTED,
  SUCCESS,
} from '@rootstrap/redux-tools';
import ImageEditor from '@react-native-community/image-editor';

import { updateProfile, updateProfileReset } from 'actions/profileActions';
import ErrorView from 'components/common/form/ErrorView';
import CameraRollItem from 'components/CameraRollItem';
import { avatar as avatarField, errorMsg } from 'constants/fields';
import { callbackParam, profileParam } from 'constants/parameters';
import useCameraRollPhotos from 'hooks/useCameraRollPhotos';
import strings from 'locale';
import styles from './styles';

const CameraRollScreen = ({ navigation }) => {
  const { COMMON } = strings;
  const { data: photosCamera } = useCameraRollPhotos();

  const [selectedPhoto, setSelectedPhoto] = useState('');

  const profile = useNavigationParam(profileParam);
  const callback = useNavigationParam(callbackParam);
  const dispatch = useDispatch();
  const userId = useSelector(({ session: { userId } }) => userId);

  const base64 = 'base64';
  const base64Data = `data:image/jpeg;${base64},`;

  const { error = {}, status: updateProfileStatus } = useStatus(updateProfile);

  const changeAvatar = imageBase64 => {
    dispatch(
      updateProfile(userId, {
        ...profile,
        [avatarField]: `${base64Data}${imageBase64}`,
      }),
    );
  };

  useEffect(() => {
    // If I enter the screen with a previous updateProfile made,
    // I reset to NOT_STARTED
    if (updateProfileStatus !== NOT_STARTED) {
      const reset = async () => dispatch(updateProfileReset());
      reset();
    }
  }, []);

  useEffect(() => {
    switch (updateProfileStatus) {
      case NOT_STARTED:
        if (selectedPhoto) {
          callback();
          navigation.goBack();
        }
        break;

      case SUCCESS:
        dispatch(updateProfileReset());
        break;
    }
  }, [updateProfileStatus]);

  const getBase64 = async uri => {
    await RNFS.readFile(uri, base64).then(image64 => {
      changeAvatar(image64);
    });
  };

  const changeAvatarRequest = (height, uri, width) => {
    setSelectedPhoto(uri);
    ImageEditor.cropImage(uri, {
      offset: { x: 0, y: 0 },
      size: { width: width, height: height },
    }).then(url => {
      getBase64(url);
    });
  };

  return (
    <View>
      {updateProfileStatus === LOADING && (
        <Text style={styles.loadingText}>{COMMON.loading}</Text>
      )}
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
      {error && <ErrorView error={error[errorMsg]} />}
    </View>
  );
};

export default CameraRollScreen;
