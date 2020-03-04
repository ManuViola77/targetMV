import React from 'react';
import { Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import { Badge } from 'react-native-elements';
import { func } from 'prop-types';

import defaultProfileImage from 'assets/images/default_profile_image.png';
import ImagePlaceholder from 'components/common/ImagePlaceholder';
import { matchesShape } from 'constants/shapes';
import strings from 'locale';
import styles, { AVATAR_SIZE, ICON_SIZE } from './styles';

const MatchesListItem = ({ item, onPress }) => {
  const {
    lastMessage,
    unreadMessages,
    user: {
      avatar: { smallThumbUrl },
      fullName,
    },
  } = item;

  const { CHAT } = strings;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={styles.horizontalContainer}
    >
      <ImagePlaceholder
        borderRadius={AVATAR_SIZE / 2}
        icon={defaultProfileImage}
        iconUrl={smallThumbUrl}
        placeholder={defaultProfileImage}
        placeholderStyle={styles.avatarPlaceholder}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{fullName} </Text>
        <Text>{lastMessage || `${CHAT.start}${fullName}!`} </Text>
      </View>
      <View style={styles.topicBadge}>
        <ImagePlaceholder
          borderRadius={ICON_SIZE / 2}
          icon={defaultProfileImage}
          iconUrl={smallThumbUrl}
          placeholder={defaultProfileImage}
          placeholderStyle={styles.iconPlaceholder}
          style={styles.icon}
        />
        {!!unreadMessages && (
          <Badge
            badgeStyle={styles.badge}
            textStyle={styles.badgeText}
            value={unreadMessages}
            status="warning"
            containerStyle={styles.badgeContainer}
          />
        )}
      </View>
    </TouchableOpacity>
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
