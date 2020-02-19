import React from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { arrayOf, bool, func, number, object, shape, string } from 'prop-types';

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
  editable,
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
          disabled={!editable}
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
  topicSelected: shape({
    icon: string,
    id: number,
    label: string,
  }),
  callback: func.isRequired,
  errorMessage: arrayOf(string),
  help: string,
  subViewState: shape({
    bounceValue: object,
    isHidden: bool,
  }).isRequired,
  toggleSubview: func.isRequired,
  topicsList: arrayOf(
    shape({
      topic: shape({
        icon: string,
        id: number,
        label: string,
      }),
    }),
  ).isRequired,
  editable: bool,
};

TopicListPicker.defaultProps = {
  title: '',
  topicSelected: null,
  errorMessage: null,
  help: '',
  subViewState: null,
  topicsList: [],
  editable: true,
};

export default TopicListPicker;
