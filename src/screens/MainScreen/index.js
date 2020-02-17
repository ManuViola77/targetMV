import React, { useCallback, useEffect, useMemo } from 'react';
import { Animated, Image, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

import { getTargets } from 'actions/targetActions';
import { getTopics } from 'actions/topicActions';
import location_marker from 'assets/images/location_marker.png';
import target from 'assets/images/target.png';
import { SUB_VIEW_HEIGHT } from 'constants/targetActions';
import { TOPICS_HEIGHT } from 'constants/topicActions';
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
    dispatch(getTopics());
    dispatch(getTargets());
  }, [dispatch]);

  useEffect(() => {
    createTargetState.isHidden && getTargetsAndTopics();
  }, [createTargetState]);

  const apiTargetsList = useSelector(state => state.targets.targetsList);
  const topicsList = useSelector(state => state.topics.topicsList);

  let targetsList = useMemo(() => {
    if (apiTargetsList && topicsList) {
      return (targetsList = apiTargetsList.map(({ target }) => {
        const { topicId } = target;
        return {
          ...target,
          topic: topicsList.find(({ topic: { id } }) => id === topicId).topic,
        };
      }));
    }
  }, [topicsList, apiTargetsList]);

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
