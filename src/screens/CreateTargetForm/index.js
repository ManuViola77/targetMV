import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { topics, targets, createTarget } from 'actions/targetActions';
import { CREATE_TARGET_RESET } from 'constants/targetActions';
import {
  title,
  latitude,
  longitude,
  radius,
  topic_id,
  errorMsg,
} from 'constants/fields';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import TopicListPicker from 'components/TopicListPicker';
import { TOPICS_HEIGHT } from 'constants/targetActions';
import useAnimateCreateTarget from 'hooks/useAnimateCreateTarget';
import useAuthStates from 'hooks/useAuthStates';
import strings from 'locale';
import createTargetValidations from 'validations/createTargetValidations';
import styles from './styles';

import { Image } from 'react-native';

const CreateTargetForm = ({
  currentLocation,
  onPressButton,
  currentSubViewState,
  topicListState,
  toggleTopicListView,
}) => {
  const { COMMON, CREATE_TARGET } = strings;

  const dispatch = useDispatch();
  const topicsRequest = useCallback(() => dispatch(topics()), [dispatch]);
  const targetsRequest = useCallback(() => dispatch(targets()), [dispatch]);
  const createTargetRequest = useCallback(
    target => dispatch(createTarget(target, onPressButton, false)),
    [dispatch],
  );

  const { error, status } = useStatus(createTarget);
  const {
    values,
    errors,
    handleChange,
    handleAuth,
    resetState,
    setValues,
  } = useAuthStates(createTargetRequest);

  const errorMessages = { ...errors, ...error };

  const initialState = {
    [latitude]: currentLocation.latitude,
    [longitude]: currentLocation.longitude,
  };
  const setInitialState = () => setValues(initialState);

  // sets de initial state value for latitude and longitude
  useEffect(() => {
    setInitialState();
  }, [currentLocation]);

  // reset states when this form is hidden/unhidden
  useEffect(() => {
    dispatch(CREATE_TARGET_RESET);
    resetState();
    setInitialState();
  }, [currentSubViewState]);

  return (
    <View>
      <Input
        title={CREATE_TARGET.area}
        text={values[radius]}
        callback={newValue => handleChange(radius, newValue)}
        errorMessage={errorMessages[radius]}
      />
      <Input
        title={CREATE_TARGET.title}
        text={values[title]}
        callback={newValue => handleChange(title, newValue)}
        errorMessage={errorMessages[title]}
        help={CREATE_TARGET.helpTitle}
      />
      {/* <Input
        title={CREATE_TARGET.topic}
        text={values[topic_id]}
        callback={newValue => handleChange(topic_id, newValue)}
        errorMessage={errorMessages[topic_id]}
        help={CREATE_TARGET.helpTopic}
        onPress={() => {
          console.log('fui apretado oh');
        }}
      /> */}
      <TopicListPicker
        title={CREATE_TARGET.topic}
        text={values[topic_id]}
        callback={newValue => handleChange(topic_id, newValue)}
        errorMessage={errorMessages[topic_id]}
        help={CREATE_TARGET.helpTopic}
        subViewState={topicListState}
        toggleSubview={toggleTopicListView}
      />
      <ErrorView error={errorMessages[errorMsg]} />
      {topicListState.isHidden && (
        <Button
          title={status === LOADING ? COMMON.loading : CREATE_TARGET.button}
          onPress={() => handleAuth(createTargetValidations)}
        />
      )}
    </View>
  );
};

export default CreateTargetForm;
