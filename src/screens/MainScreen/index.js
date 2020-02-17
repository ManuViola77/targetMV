import React, { useCallback, useEffect } from 'react';
import { Animated, Image, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';

import { getTargets, getTopics } from 'actions/targetActions';
import location_marker from 'assets/images/location_marker.png';
import target from 'assets/images/target.png';
import { SUB_VIEW_HEIGHT, TOPICS_HEIGHT } from 'constants/targetActions';
import Marker from 'components/common/Marker';
import useAnimateCreateTarget from 'hooks/useAnimateCreateTarget';
import useGPSLocation from 'hooks/useGPSLocation';
import useNavigateOnLogoutEffect from 'hooks/useNavigateOnLogoutEffect';
import strings from 'locale';
import CreateTargetForm from 'screens/CreateTargetForm';
import styles from './styles';

const Main = ({ navigation }) => {
  useNavigateOnLogoutEffect(navigation);

  const { currentLocation, useWatchLocation } = useGPSLocation();

  useWatchLocation();

  // state for animation for CreateTargetForm
  const createTarget = useAnimateCreateTarget(SUB_VIEW_HEIGHT);
  const createTargetState = createTarget.subViewState;
  const toggleCreateTargetView = createTarget.toggleSubview;

  // state for animation for TopicList
  const topicList = useAnimateCreateTarget(TOPICS_HEIGHT);
  const topicListState = topicList.subViewState;
  const toggleTopicListView = topicList.toggleSubview;

  const dispatch = useDispatch();

  const getTargetsAndTopics = useCallback(() => {
    topicsList = dispatch(getTopics());
    targetsList = dispatch(getTargets());
  }, [dispatch]);

  useEffect(() => {
    createTargetState.isHidden && getTargetsAndTopics();
  }, [createTargetState]);

  let { error: targetsList } = useStatus(getTargets);
  let { error: topicsList } = useStatus(getTopics);

  if (targetsList && topicsList) {
    targetsList = targetsList.map(({ target }) => {
      let found = false;
      let index = 0;
      let newTarget = target;
      while (!found && index < topicsList.length) {
        let { topic } = topicsList[index];
        if (topic.id === target.topicId) {
          newTarget = { ...newTarget, topic };
          found = true;
        }
        index++;
      }
      return newTarget;
    });
  }

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showUserLocation
        followUserLocation
        loadingEnabled
        region={currentLocation}
        onPress={() =>
          !topicListState.isHidden
            ? toggleTopicListView(topicListState.isHidden)
            : !createTargetState.isHidden &&
              toggleCreateTargetView(createTargetState.isHidden)
        }
      >
        <Marker
          icon={location_marker}
          location={currentLocation}
          markerKey={0}
          showCircle
          draggable
        />
        {targetsList &&
          targetsList.map(target => (
            <Marker
              icon={location_marker}
              uriIcon={target.topic ? target.topic.icon : null}
              location={{ latitude: target.lat, longitude: target.lng }}
              markerKey={target.id}
              showCircle
              radius={target.radius}
            />
          ))}
      </MapView>
      <TouchableOpacity
        style={styles.newTarget}
        onPress={() => toggleCreateTargetView(createTargetState.isHidden)}
      >
        <Image source={target} />
        <Text style={styles.text}>{strings.TITLE.createTarget}</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.subView,
          { transform: [{ translateY: createTargetState.bounceValue }] },
        ]}
      >
        <CreateTargetForm
          currentLocation={currentLocation}
          onPressButton={toggleCreateTargetView}
          currentSubViewState={createTargetState}
          topicsList={topicsList}
          topicListState={topicListState}
          toggleTopicListView={toggleTopicListView}
        />
      </Animated.View>
    </>
  );
};

export default Main;
