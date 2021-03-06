import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, LOADING, SUCCESS } from '@rootstrap/redux-tools';
import { arrayOf, func } from 'prop-types';

import { createTarget, createTargetReset } from 'actions/targetActions';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import DeleteTargetModal from 'components/DeleteTargetModal';
import MatchTargetModal from 'components/MatchTargetModal';
import TopicListPicker from 'components/TopicListPicker';
import {
  errorMsg,
  latitude as latitudeField,
  longitude as longitudeField,
  radius as radiusField,
  title as titleField,
  topicId as topicIdField,
  topicSelected,
} from 'constants/fields';
import {
  locationShape,
  selectedTargetShape,
  subViewStateShape,
  topicShape,
} from 'constants/shapes';
import useFormStates from 'hooks/useFormStates';
import strings from 'locale';
import createTargetValidations from 'validations/createTargetValidations';
import styles from './styles';

const CreateTargetForm = ({
  navigation,
  currentLocation,
  currentSubViewState,
  onPressButton,
  selectedTarget,
  toggleTopicListView,
  topicsList,
  topicListState,
}) => {
  const { COMMON, CREATE_TARGET, DELETE_TARGET } = strings;

  const dispatch = useDispatch();
  const createTargetRequest = useCallback(
    target => dispatch(createTarget(target)),
    [dispatch],
  );

  const { error, status } = useStatus(createTarget);
  const {
    errors,
    handleChange,
    handleConfirmForm,
    setValues,
    values,
  } = useFormStates(createTargetRequest);

  const errorMessages = { ...errors, ...error };

  const matchedUser = useSelector(
    ({ targets: { matchedUser } }) => matchedUser,
  );

  const [isMatchModalVisible, setIsMatchModalVisible] = useState(false);

  const closeMatchModal = () => {
    setIsMatchModalVisible(false);
    onPressButton(false);
  };

  useEffect(() => {
    if (status === SUCCESS) {
      matchedUser ? setIsMatchModalVisible(true) : onPressButton(false);
    }
  }, [status]);

  const { id, lat, lng, radius, title, topic, topicId } = selectedTarget;
  const { latitude, longitude } = currentLocation;
  const initialState = id
    ? {
        [titleField]: title,
        [latitudeField]: lat,
        [longitudeField]: lng,
        [radiusField]: radius.toString(),
        [topicSelected]: topic,
        [topicIdField]: topicId,
      }
    : {
        [latitudeField]: latitude,
        [longitudeField]: longitude,
      };

  const setInitialState = () => setValues(initialState);

  // sets de initial state value for latitude and longitude
  useEffect(() => {
    setInitialState();
  }, []);

  // reset states when this form is hidden/unhidden and isn't delete mode (no selectedTarget)
  useEffect(() => {
    !selectedTarget.id &&
      currentSubViewState.isHidden &&
      dispatch(createTargetReset());
    setInitialState();
  }, [currentSubViewState]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const matchId = useSelector(({ targets: { matchId } }) => matchId);

  return (
    <View style={styles.container}>
      <Input
        callback={newValue => handleChange(radiusField, newValue)}
        editable={!selectedTarget.id}
        errorMessage={errorMessages[radiusField]}
        text={values[radiusField]}
        title={CREATE_TARGET.area}
      />
      <Input
        callback={newValue => handleChange(titleField, newValue)}
        editable={!selectedTarget.id}
        errorMessage={errorMessages[titleField]}
        help={CREATE_TARGET.helpTitle}
        text={values[titleField]}
        title={CREATE_TARGET.title}
      />
      <TopicListPicker
        callback={newValue => handleChange(topicSelected, newValue)}
        editable={!selectedTarget.id}
        errorMessage={errorMessages[topicIdField]}
        help={CREATE_TARGET.helpTopic}
        title={CREATE_TARGET.topic}
        subViewState={topicListState}
        toggleSubview={toggleTopicListView}
        topicSelected={values[topicSelected]}
        topicsList={topicsList}
      />
      <ErrorView error={errorMessages[errorMsg]} />
      {selectedTarget.id ? (
        <>
          <Button
            style={styles.deleteButton}
            title={status === LOADING ? COMMON.loading : DELETE_TARGET.button}
            onPress={() => setIsModalVisible(true)}
          />
          <DeleteTargetModal
            isModalVisible={isModalVisible}
            closeModal={() => setIsModalVisible(false)}
            target={selectedTarget}
            toggleCreateTargetView={onPressButton}
          />
        </>
      ) : (
        topicListState.isHidden && (
          <Button
            title={status === LOADING ? COMMON.loading : CREATE_TARGET.button}
            onPress={() => handleConfirmForm(createTargetValidations)}
          />
        )
      )}
      <MatchTargetModal
        closeModal={closeMatchModal}
        isModalVisible={isMatchModalVisible}
        matchId={matchId}
        matchedUser={matchedUser}
        navigation={navigation}
      />
    </View>
  );
};

CreateTargetForm.propTypes = {
  currentLocation: locationShape.isRequired,
  currentSubViewState: subViewStateShape.isRequired,
  onPressButton: func.isRequired,
  selectedTarget: selectedTargetShape,
  toggleTopicListView: func.isRequired,
  topicsList: arrayOf(topicShape).isRequired,
  topicListState: subViewStateShape.isRequired,
};

CreateTargetForm.defaultProps = {
  currentLocation: {},
  currentSubViewState: {},
  selectedTarget: {},
  topicsList: [],
  topicListState: {},
};

export default CreateTargetForm;
