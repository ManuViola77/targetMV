import React from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { arrayOf, bool, func, string } from 'prop-types';

import ErrorView from 'components/common/form/ErrorView';
import TopicList from 'components/TopicList';
import {
  subViewStateShape,
  topicItemShape,
  topicShape,
} from 'constants/shapes';
import styles from './styles';

const TopicListPicker = ({
  callback,
  editable,
  errorMessage,
  help,
  subViewState,
  title,
  toggleSubview,
  topicSelected,
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
          disabled={!editable}
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
            currentSubViewState={subViewState}
            list={topicsList}
            onPress={onPressTopic}
          />
        )}
      </Animated.View>
    </>
  );
};

TopicListPicker.propTypes = {
  callback: func.isRequired,
  editable: bool,
  errorMessage: arrayOf(string),
  help: string,
  subViewState: subViewStateShape.isRequired,
  title: string.isRequired,
  toggleSubview: func.isRequired,
  topicSelected: topicItemShape,
  topicsList: arrayOf(topicShape).isRequired,
};

TopicListPicker.defaultProps = {
  editable: true,
  errorMessage: null,
  help: '',
  subViewState: null,
  title: '',
  topicSelected: null,
  topicsList: [],
};

export default TopicListPicker;
