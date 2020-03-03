import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Badge } from 'react-native-elements';
import { func } from 'prop-types';

import defaultProfileImage from 'assets/images/default_profile_image.png';
import { matchesShape } from 'constants/shapes';
import strings from 'locale';
import styles, { badgeTop, badgeRight, badgeLeft, badgeBottom } from './styles';

const MatchesListItem = ({ item, onPress }) => {
  const {
    lastMessage,
    //unreadMessages,
    user: {
      avatar: { smallThumbUrl },
      fullName,
    },
  } = item;

  const { CHAT } = strings;

  const unreadMessages = 3;

  return (
    <>
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.horizontalContainer}
      >
        <Image
          source={smallThumbUrl ? { uri: smallThumbUrl } : defaultProfileImage}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{fullName} </Text>
          <Text>{lastMessage ? lastMessage : CHAT.start} </Text>
        </View>
        <View style={styles.topicBadge}>
          <Image
            source={
              smallThumbUrl ? { uri: smallThumbUrl } : defaultProfileImage
            }
            style={styles.icon}
          />
          {!!unreadMessages && (
            <Badge
              badgeStyle={styles.badge}
              textStyle={styles.badgeText}
              value={unreadMessages}
              status="warning"
              containerStyle={[
                styles.badgeContainer,
                {
                  top: badgeTop,
                  right: badgeRight,
                  left: badgeLeft,
                  buttom: badgeBottom,
                },
              ]}
            />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
    </>
  );
};

MatchesListItem.propTypes = {
  item: matchesShape.isRequired,
  onPress: func.isRequired,
};

MatchesListItem.defaultProps = {
  item: {},
};

export default MatchesListItem;
