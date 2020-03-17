import React from 'react';
import { Bubble as BubbleRN } from 'react-native-gifted-chat';

import styles from './styles';

const Bubble = ({ bubbleProps }) => (
  <BubbleRN
    {...bubbleProps}
    wrapperStyle={{
      right: styles.wrapperRight,
    }}
    textStyle={{
      left: styles.textBlack,
      right: styles.textBlack,
    }}
    timeTextStyle={{
      left: styles.textBlack,
      right: styles.textBlack,
    }}
  />
);

export default Bubble;
