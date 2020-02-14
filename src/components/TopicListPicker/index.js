import React, { useCallback, useEffect } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';

import { topics } from 'actions/targetActions';
import ErrorView from 'components/common/form/ErrorView';
import TopicList from 'components/TopicList';
import styles from './styles';

const TopicListPicker = ({
  title,
  topic_selected,
  callback,
  errorMessage,
  help,
  subViewState,
  toggleSubview,
}) => {
  const dispatch = useDispatch();

  const topicsRequest = useCallback(() => {
    topicsList = dispatch(topics());
  }, [dispatch]);

  useEffect(() => {
    topicsRequest();
  }, []);

  const { error } = useStatus(topics);
  var topicsList = error;

  const onPressTopic = (item, isHidden) => {
    callback(item);
    toggleSubview(isHidden);
  };

  console.log('topic_selected: ', topic_selected);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          onPress={() => toggleSubview(subViewState.isHidden)}
          style={[styles.box, errorMessage ? styles.error : {}]}>
          {topic_selected && (
            <Image source={{ uri: topic_selected.icon }} style={styles.icon} />
          )}
          <Text style={[styles.text, topic_selected ? {} : styles.hint]}>
            {topic_selected ? topic_selected.label : help}
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
            onPress={onPressTopic}
            currentSubViewState={subViewState}
          />
        )}
      </Animated.View>
    </>
  );
};

export default TopicListPicker;
