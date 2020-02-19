import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Modal from 'react-native-modal';
import { bool, func, object } from 'prop-types';

import Button from 'components/common/form/Button';
import Link from 'components/common/Link';
import strings from 'locale';
import styles from './styles';

const DeleteTargetModal = ({ isModalVisible, closeModal, target }) => {
  const { DELETE_TARGET } = strings;

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
              source={{ uri: target.topic.icon }}
              overlayContainerStyle={styles.icon}
              activeOpacity={0.7}
            />
          </View>
        </View>
        <Text style={styles.targetTitle}>{target.title}</Text>
        <Text style={styles.rememberText}>{DELETE_TARGET.rememberText}</Text>
        <View>
          <Button title={DELETE_TARGET.button} onPress={closeModal} />
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
};

export default DeleteTargetModal;
