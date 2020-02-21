import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';
import { bool, func, object } from 'prop-types';

import { deleteTarget } from 'actions/targetActions';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Link from 'components/common/Link';
import { errorMsg } from 'constants/fields';
import { DELETE_TARGET_RESET } from 'constants/targetActions';
import strings from 'locale';
import styles from './styles';

const DeleteTargetModal = ({
  isModalVisible,
  closeModal,
  target,
  toggleCreateTargetView,
}) => {
  const { COMMON, DELETE_TARGET } = strings;

  const dispatch = useDispatch();
  const deleteTargetRequest = useCallback(
    idTarget => dispatch(deleteTarget(idTarget)),
    [dispatch],
  );

  const { error, status } = useStatus(deleteTarget);

  const errorMessages = { ...error };

  // reset states when this form is hidden/unhidden
  useEffect(() => {
    dispatch(DELETE_TARGET_RESET);
  }, [isModalVisible]);

  // close modal and targetView when delete is success
  useEffect(() => {
    if (status == SUCCESS) {
      closeModal();
      toggleCreateTargetView(false);
    }
  }, [status]);

  const { id, title, topic } = target;

  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      swipeDirection="right"
      isVisible={isModalVisible}
      style={styles.modal}
    >
      <View style={styles.container}>
        <Text style={styles.confirmText}>{DELETE_TARGET.confirmText}</Text>
        <View style={styles.circleView}>
          <View style={styles.iconContainer}>
            <Avatar
              size={30}
              rounded
              source={{ uri: topic.icon }}
              overlayContainerStyle={styles.icon}
              activeOpacity={0.7}
            />
          </View>
        </View>
        <Text style={styles.targetTitle}>{title}</Text>
        <Text style={styles.rememberText}>{DELETE_TARGET.rememberText}</Text>
        <ErrorView error={errorMessages[errorMsg]} />
        <View>
          <Button
            title={status === LOADING ? COMMON.loading : DELETE_TARGET.button}
            onPress={() => deleteTargetRequest(id)}
          />
          <Link text={DELETE_TARGET.cancel} onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

DeleteTargetModal.propTypes = {
  isModalVisible: bool.isRequired,
  closeModal: func.isRequired,
  target: object.isRequired,
  toggleCreateTargetView: func.isRequired,
};

export default DeleteTargetModal;
