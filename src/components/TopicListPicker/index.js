import React from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { array, func, object, string } from 'prop-types';

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
  topicsList,
}) => {
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
  topicsList: array.isRequired,
};

TopicListPicker.defaultProps = {
  title: '',
  topicSelected: null,
  errorMessage: null,
  help: '',
  subViewState: null,
  topicsList: [],
};

export default TopicListPicker;
