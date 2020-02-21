import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import { arrayOf, func } from 'prop-types';

import { createTarget } from 'actions/targetActions';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import DeleteTargetModal from 'components/DeleteTargetModal';
import TopicListPicker from 'components/TopicListPicker';
import {
  errorMsg,
  latitude,
  longitude,
  radius,
  title,
  topicId,
  topicSelected,
} from 'constants/fields';
import {
  locationShape,
  selectedTargetShape,
  subViewStateShape,
  topicShape,
} from 'constants/shapes';
import { CREATE_TARGET_RESET } from 'constants/targetActions';
import useFormStates from 'hooks/useFormStates';
import useModalState from 'hooks/useModalState';
import strings from 'locale';
import createTargetValidations from 'validations/createTargetValidations';
import styles from './styles';

const CreateTargetForm = ({
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
    target => dispatch(createTarget(target, onPressButton, false)),
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

  const initialState = selectedTarget.id
    ? {
        [title]: selectedTarget.title,
        [latitude]: selectedTarget.lat,
        [longitude]: selectedTarget.lng,
        [radius]: selectedTarget.radius.toString(),
        [topicSelected]: selectedTarget.topic,
        [topicId]: selectedTarget.topicId,
      }
    : {
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
    setInitialState();
  }, [currentSubViewState]);

  const { isModalVisible, setIsModalVisible } = useModalState();

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <View style={styles.container}>
      <Input
        callback={newValue => handleChange(radius, newValue)}
        editable={!selectedTarget.id}
        errorMessage={errorMessages[radius]}
        text={values[radius]}
        title={CREATE_TARGET.area}
      />
      <Input
        callback={newValue => handleChange(title, newValue)}
        editable={!selectedTarget.id}
        errorMessage={errorMessages[title]}
        help={CREATE_TARGET.helpTitle}
        text={values[title]}
        title={CREATE_TARGET.title}
      />
      <TopicListPicker
        callback={newValue => handleChange(topicSelected, newValue)}
        editable={!selectedTarget.id}
        errorMessage={errorMessages[topicId]}
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
            onPress={openModal}
          />
          <DeleteTargetModal
            isModalVisible={isModalVisible}
            closeModal={closeModal}
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
