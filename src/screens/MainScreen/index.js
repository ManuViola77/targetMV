import React, { createRef, useEffect, useMemo } from 'react';
import { Animated, Image, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

import { getTargets } from 'actions/targetActions';
import { getTopics } from 'actions/topicActions';
import location_marker from 'assets/images/location_marker.png';
import target from 'assets/images/target.png';
import { INITIAL_LOCATION } from 'constants/map';
import { CREATE_TARGET_HEIGHT } from 'constants/common';
import { TOPICS_HEIGHT } from 'constants/common';
import Marker from 'components/common/Marker';
import useAnimateCreateTarget from 'hooks/useAnimateCreateTarget';
import useGPSLocation from 'hooks/useGPSLocation';
import useNavigateOnLogoutEffect from 'hooks/useNavigateOnLogoutEffect';
import useTargetState from 'hooks/useTargetState';
import strings from 'locale';
import CreateTargetForm from 'screens/CreateTargetForm';
import styles from './styles';

const Main = ({ navigation }) => {
  useNavigateOnLogoutEffect(navigation);

  const mapView = createRef();

  const {
    currentLocation,
    currentLocationOnMap,
    setCurrentLocationOnMap,
  } = useGPSLocation();

  // state for animation for CreateTargetForm
  const createTarget = useAnimateCreateTarget(CREATE_TARGET_HEIGHT);
  const createTargetState = createTarget.subViewState;
  const toggleCreateTargetView = createTarget.toggleSubview;

  // state for animation for TopicList
  const topicList = useAnimateCreateTarget(TOPICS_HEIGHT);
  const topicListState = topicList.subViewState;
  const toggleTopicListView = topicList.toggleSubview;

  const dispatch = useDispatch();

  const getTopicsAndTargets = () => {
    dispatch(getTopics());
    dispatch(getTargets());
  };

  useEffect(() => {
    getTopicsAndTargets();
  }, []);

  const apiTargetsList = useSelector(state => state.targets.targetsList);
  const topicsList = useSelector(state => state.topics.topicsList);

  let targetsList = useMemo(() => {
    if (apiTargetsList && topicsList) {
      return (targetsList = apiTargetsList.map(({ target }) => {
        const { topicId } = target;
        let topic = topicsList.find(({ topic: { id } }) => id === topicId);
        topic && (topic = topic.topic);
        return {
          ...target,
          topic,
        };
      }));
    }
  }, [topicsList, apiTargetsList]);

  const [
    resetSelectedTarget,
    selectedTarget,
    setSelectedTarget,
  ] = useTargetState();

  const toggleDeleteTarget = selTarget => {
    setSelectedTarget(selTarget);
    toggleCreateTargetView(true);
  };

  const closeSubView = isHidden => {
    resetSelectedTarget();
    toggleCreateTargetView(isHidden);
    getTopicsAndTargets();
    mapView.current.animateToRegion(currentLocation);
  };

  const { id: idSelectedTarget, location } = selectedTarget;

  // Instead of constantly follow the users location, it moves to marker's location
  // when a target is pressed and it moves to current location just the first time
  // a current location is different than the initial one.
  // The current location marker still moves as the user location changes, but the map
  // doesn't follow, so the user can move the map anywhere.
  useEffect(() => {
    if (idSelectedTarget) {
      mapView.current.animateToRegion(location);
    } else {
      if (!currentLocationOnMap && currentLocation !== INITIAL_LOCATION) {
        mapView.current.animateToRegion(currentLocation);
        setCurrentLocationOnMap(true);
      }
    }
  }, [currentLocation, idSelectedTarget]);

  return (
    <>
      <MapView
        followUserLocation
        initialRegion={currentLocation}
        loadingEnabled
        onPress={() =>
          !topicListState.isHidden
            ? toggleTopicListView(topicListState.isHidden)
            : !createTargetState.isHidden &&
              closeSubView(createTargetState.isHidden)
        }
        provider={PROVIDER_GOOGLE}
        ref={mapView}
        showUserLocation
        style={styles.map}
      >
        <Marker
          draggable
          icon={location_marker}
          id={0}
          key={0}
          location={currentLocation}
          showCircle
        />
        {targetsList &&
          targetsList.map((target = {}) => {
            const { id, lat, lng, radius, topic } = target;
            return (
              <Marker
                deleteMode={selectedTarget.id === id}
                icon={location_marker}
                id={id}
                key={id}
                location={{ latitude: lat, longitude: lng }}
                onPress={toggleDeleteTarget}
                radius={radius}
                showCircle
                target={target}
                uriIcon={topic ? topic.icon : null}
              />
            );
          })}
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
          currentSubViewState={createTargetState}
          onPressButton={closeSubView}
          navigation={navigation}
          selectedTarget={selectedTarget}
          toggleTopicListView={toggleTopicListView}
          topicsList={topicsList}
          topicListState={topicListState}
        />
      </Animated.View>
    </>
  );
};

export default Main;
