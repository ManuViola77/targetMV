import React, { useCallback, useEffect } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';
import { array, func, object, string } from 'prop-types';

import { getTopics } from 'actions/targetActions';
import ErrorView from 'components/common/form/ErrorView';
import TopicList from 'components/TopicList';
import styles from './styles';

const TopicListPicker = ({
  title,
  topicSelected,
  callback,
  errorMessage,
  help,
  subViewState,
  toggleSubview,
}) => {
  const dispatch = useDispatch();

  const topicsRequest = useCallback(() => {
    topicsList = dispatch(getTopics());
  }, [dispatch]);

  useEffect(() => {
    topicsRequest();
  }, []);

  const { error } = useStatus(getTopics);
  let topicsList = error;

  const onPressTopic = (item, isHidden) => {
    callback(item);
    toggleSubview(isHidden);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          onPress={() => toggleSubview(subViewState.isHidden)}
          style={[styles.box, errorMessage ? styles.error : {}]}
        >
          {topicSelected && (
            <Image source={{ uri: topicSelected.icon }} style={styles.icon} />
          )}
          <Text style={[styles.text, topicSelected ? {} : styles.hint]}>
            {topicSelected ? topicSelected.label : help}
          </Text>
        </TouchableOpacity>
        {!!errorMessage && <ErrorView error={errorMessage[0]} />}
      </View>
      <Animated.View
        style={[
          styles.subView,
          { transform: [{ translateY: subViewState.bounceValue }] },
        ]}
      >
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

TopicListPicker.propTypes = {
  title: string.isRequired,
  topicSelected: object.isRequired,
  callback: func.isRequired,
  errorMessage: array,
  help: string,
  subViewState: object.isRequired,
  toggleSubview: func.isRequired,
};

TopicListPicker.defaultProps = {
  title: '',
  topicSelected: null,
  errorMessage: null,
  help: '',
  subViewState: null,
};

export default TopicListPicker;
