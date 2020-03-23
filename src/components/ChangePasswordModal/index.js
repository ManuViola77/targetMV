import React, { useCallback, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';
import { bool, func } from 'prop-types';

import { changePassword, changePasswordReset } from 'actions/userActions';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Input from 'components/common/form/Input';
import Link from 'components/common/Link';
import {
  password as passwordField,
  confirmPassword as confirmPasswordField,
  currentPassword as currentPasswordField,
  errorMsg,
} from 'constants/fields';
import useFormStates from 'hooks/useFormStates';
import strings from 'locale';
import changePasswordValidations from 'validations/changePasswordValidations';
import styles from './styles';

const ChangePasswordModal = ({ closeModal, isModalVisible }) => {
  const { COMMON, CHANGE_PASSWORD } = strings;

  const dispatch = useDispatch();

  const changePasswordRequest = useCallback(
    passwords => dispatch(changePassword(passwords)),
    [dispatch],
  );

  const { error = {}, status } = useStatus(changePassword);

  const {
    errors,
    handleChange,
    handleConfirmForm,
    resetState,
    values,
  } = useFormStates(changePasswordRequest);

  const errorMessages = { ...errors, ...error };

  const cleanUp = () => {
    dispatch(changePasswordReset());
    resetState({}, {});
  };

  // reset states when this form is hidden
  useEffect(() => {
    !isModalVisible && cleanUp();
  }, [isModalVisible]);

  // close modal when change password is success
  useEffect(() => {
    if (status == SUCCESS) {
      closeModal();
    }
  }, [status]);

  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={isModalVisible}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      style={styles.modal}
      swipeDirection="right"
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Input
            callback={newValue => handleChange(currentPasswordField, newValue)}
            errorMessage={errorMessages[currentPasswordField]}
            secureTextEntry
            text={values[currentPasswordField]}
            title={CHANGE_PASSWORD.currentPassword}
          />
          <Input
            callback={newValue => handleChange(passwordField, newValue)}
            errorMessage={errorMessages[passwordField]}
            secureTextEntry
            text={values[passwordField]}
            title={CHANGE_PASSWORD.password}
          />
          <Input
            callback={newValue => handleChange(confirmPasswordField, newValue)}
            errorMessage={errorMessages[confirmPasswordField]}
            secureTextEntry
            text={values[confirmPasswordField]}
            title={CHANGE_PASSWORD.confirmPassword}
          />
          <ErrorView error={errorMessages[errorMsg]} />
          <View>
            <Button
              onPress={() => handleConfirmForm(changePasswordValidations)}
              title={status === LOADING ? COMMON.loading : CHANGE_PASSWORD.save}
            />
            <Link onPress={closeModal} text={CHANGE_PASSWORD.cancel} />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

ChangePasswordModal.propTypes = {
  closeModal: func.isRequired,
  isModalVisible: bool.isRequired,
};

export default ChangePasswordModal;
