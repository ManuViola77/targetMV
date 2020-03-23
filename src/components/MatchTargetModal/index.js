import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { bool, func, number } from 'prop-types';

import defaultProfileImage from 'assets/images/default_profile_image.png';
import matchLogo from 'assets/images/match_logo.png';
import Button from 'components/common/form/Button';
import ImagePlaceholder from 'components/common/ImagePlaceholder';
import Link from 'components/common/Link';
import { targetMatchParam } from 'constants/parameters';
import { CHAT_SCREEN } from 'constants/screens';
import { userShape } from 'constants/shapes';
import strings from 'locale';
import styles, { profileImageSize } from './styles';

const MatchTargetModal = ({
  navigation,
  closeModal,
  isModalVisible,
  matchId,
  matchedUser,
}) => {
  if (matchedUser) {
    const { MATCH_TARGET } = strings;

    const {
      avatar: { normalUrl },
      username,
    } = matchedUser;

    const chatParam = { matchId, user: matchedUser };

    const goToChat = () => {
      closeModal();
      navigation.push(CHAT_SCREEN, { [targetMatchParam]: chatParam });
    };

    console.log('matchedUser: ', matchedUser);

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
            <ImagePlaceholder icon={matchLogo} style={styles.matchLogo} />
            <Text style={styles.yey}>{MATCH_TARGET.yey}</Text>
            <Text style={styles.text}>{MATCH_TARGET.text}</Text>
            <View style={styles.userContainer}>
              <ImagePlaceholder
                borderRadius={profileImageSize / 2}
                icon={defaultProfileImage}
                iconUrl={normalUrl}
                placeholder={defaultProfileImage}
                placeholderStyle={styles.profileImagePlaceholder}
                style={styles.profileImage}
              />
              <Text style={styles.username}>{username}</Text>
            </View>
            <View>
              <Button
                onPress={goToChat}
                style={styles.button}
                textStyle={styles.buttonText}
                title={MATCH_TARGET.startChat}
              />
              <Link onPress={closeModal} text={MATCH_TARGET.skip} />
            </View>
          </View>
        </ScrollView>
      </Modal>
    );
  } else {
    return null;
  }
};

MatchTargetModal.propTypes = {
  closeModal: func.isRequired,
  isModalVisible: bool.isRequired,
  matchId: number,
  matchedUser: userShape,
};

export default MatchTargetModal;
