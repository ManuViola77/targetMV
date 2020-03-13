import React from 'react';
import { Text } from 'react-native';
import { Send as SendRN } from 'react-native-gifted-chat';

import strings from 'locale';
import styles from './styles';

const { CHAT } = strings;
const Send = ({ sendProps }) => (
  <SendRN {...sendProps}>
    <Text style={styles.sendText}>{CHAT.send}</Text>
  </SendRN>
);

export default Send;
