import React, { useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';

import useCameraRollPhotos from 'hooks/useCameraRollPhotos';
import styles from './styles';

const CameraRollScreen = () => {
  const {
    photos: { data: photosCamera },
    setPhotosState,
  } = useCameraRollPhotos();

  useEffect(() => {
    setPhotosState();
  }, []);

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
              image: { uri },
            },
          },
        }) => <Image style={styles.image} source={{ uri }} />}
      />
    </View>
  );
};

export default CameraRollScreen;
