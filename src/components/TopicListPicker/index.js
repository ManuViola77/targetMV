import React, { useCallback, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';

import { topics } from 'actions/targetActions';
import ErrorView from 'components/common/form/ErrorView';
import TopicList from 'components/TopicList';
import styles from './styles';

const TopicListPicker = ({
  title,
  secureTextEntry,
  text,
  callback,
  errorMessage,
  autoCapitalize,
  autoCorrect,
  help,
  subViewState,
  toggleSubview,
}) => {
  const dispatch = useDispatch();

  const topicsRequest = useCallback(() => {
    topicsList = dispatch(topics());
    console.log(' EN topicsRequest!!!, topicsList: ', topicsList);
  }, [dispatch]);

  useEffect(() => {
    topicsRequest();
  }, []);

  const { error } = useStatus(topics);
  var topicsList = error;

  console.log('in TOPICLISTPICKER error: ', error);

  console.log('in TOPICLISTPICKER topicsList: ', topicsList);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => toggleSubview(subViewState.isHidden)}>
          <Text
            style={[
              styles.text,
              errorMessage ? styles.textError : {},
              text ? {} : styles.hint,
            ]}>
            {text ? text : help}
          </Text>
        </TouchableOpacity>
        {!!errorMessage && <ErrorView error={errorMessage[0]} />}
      </View>
      <Animated.View
        style={[
          styles.subView,
          { transform: [{ translateY: subViewState.bounceValue }] },
        ]}>
        {!subViewState.isHidden && (
          <TopicList
            list={topicsList}
            onPress={toggleSubview}
            currentSubViewState={subViewState}
          />
        )}
      </Animated.View>
    </>
  );
};

export default TopicListPicker;
