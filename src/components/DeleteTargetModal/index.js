import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';
import { bool, func } from 'prop-types';

import { deleteTarget, deleteTargetReset } from 'actions/targetActions';
import Button from 'components/common/form/Button';
import ErrorView from 'components/common/form/ErrorView';
import Link from 'components/common/Link';
import { errorMsg } from 'constants/fields';
import { selectedTargetShape } from 'constants/shapes';
import strings from 'locale';
import styles, { AVATAR_SIZE } from './styles';

const DeleteTargetModal = ({
  closeModal,
  isModalVisible,
  target,
  toggleCreateTargetView,
}) => {
  const { COMMON, DELETE_TARGET } = strings;

  const dispatch = useDispatch();
  const deleteTargetRequest = useCallback(
    idTarget => dispatch(deleteTarget(idTarget)),
    [dispatch],
  );

  const { error = {}, status } = useStatus(deleteTarget);

  // reset states when this form is hidden
  useEffect(() => {
    !isModalVisible && dispatch(deleteTargetReset());
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
      isVisible={isModalVisible}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      style={styles.modal}
      swipeDirection="right"
    >
      <View style={styles.container}>
        <Text style={styles.confirmText}>{DELETE_TARGET.confirmText}</Text>
        <View style={styles.circleView}>
          <View style={styles.iconContainer}>
            <Avatar
              overlayContainerStyle={styles.icon}
              rounded
              size={AVATAR_SIZE}
              source={{ uri: topic.icon }}
            />
          </View>
        </View>
        <Text style={styles.targetTitle}>{title}</Text>
        <Text style={styles.rememberText}>{DELETE_TARGET.rememberText}</Text>
        {error && <ErrorView error={error[errorMsg]} />}
        <View>
          <Button
            onPress={() => deleteTargetRequest(id)}
            title={status === LOADING ? COMMON.loading : DELETE_TARGET.button}
          />
          <Link onPress={closeModal} text={DELETE_TARGET.cancel} />
        </View>
      </View>
    </Modal>
  );
};

DeleteTargetModal.propTypes = {
  closeModal: func.isRequired,
  isModalVisible: bool.isRequired,
  target: selectedTargetShape.isRequired,
  toggleCreateTargetView: func.isRequired,
};

export default DeleteTargetModal;
