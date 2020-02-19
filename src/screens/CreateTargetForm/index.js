import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import { arrayOf, bool, func, number, object, shape, string } from 'prop-types';

import { createTarget } from 'actions/targetActions';
import { CREATE_TARGET_RESET } from 'constants/targetActions';
import {
  title,
  latitude,
  longitude,
  radius,
  topicId,
  errorMsg,
  topicSelected,
} from 'constants/fields';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import DeleteTargetModal from 'components/DeleteTargetModal';
import TopicListPicker from 'components/TopicListPicker';
import useFormStates from 'hooks/useFormStates';
import useModalState from 'hooks/useModalState';
import strings from 'locale';
import createTargetValidations from 'validations/createTargetValidations';
import styles from './styles';

const CreateTargetForm = ({
  currentLocation,
  onPressButton,
  currentSubViewState,
  topicListState,
  toggleTopicListView,
  topicsList,
  selectedTarget,
}) => {
  const { COMMON, CREATE_TARGET, DELETE_TARGET } = strings;

  const dispatch = useDispatch();
  const createTargetRequest = useCallback(
    target => dispatch(createTarget(target, onPressButton, false)),
    [dispatch],
  );

  const { error, status } = useStatus(createTarget);
  const {
    values,
    errors,
    handleChange,
    handleConfirmForm,
    resetState,
    setValues,
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
        title={CREATE_TARGET.area}
        text={values[radius]}
        callback={newValue => handleChange(radius, newValue)}
        errorMessage={errorMessages[radius]}
        editable={!selectedTarget.id}
      />
      <Input
        title={CREATE_TARGET.title}
        text={values[title]}
        callback={newValue => handleChange(title, newValue)}
        errorMessage={errorMessages[title]}
        help={CREATE_TARGET.helpTitle}
        editable={!selectedTarget.id}
      />
      <TopicListPicker
        title={CREATE_TARGET.topic}
        topicSelected={values[topicSelected]}
        callback={newValue => handleChange(topicSelected, newValue)}
        errorMessage={errorMessages[topicId]}
        help={CREATE_TARGET.helpTopic}
        subViewState={topicListState}
        toggleSubview={toggleTopicListView}
        topicsList={topicsList}
        editable={!selectedTarget.id}
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
  currentLocation: shape({
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
  }).isRequired,
  onPressButton: func.isRequired,
  currentSubViewState: shape({
    bounceValue: object,
    isHidden: bool,
  }).isRequired,
  topicListState: shape({
    bounceValue: object,
    isHidden: bool,
  }).isRequired,
  toggleTopicListView: func.isRequired,
  topicsList: arrayOf(
    shape({
      topic: shape({
        icon: string,
        id: number,
        label: string,
      }),
    }),
  ).isRequired,
  selectedTarget: object,
};

CreateTargetForm.defaultProps = {
  currentLocation: {},
  currentSubViewState: {},
  topicListState: {},
  topicsList: [],
};

export default CreateTargetForm;
