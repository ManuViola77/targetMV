import React from 'react';
import { FlatList, View } from 'react-native';
import { arrayOf, func } from 'prop-types';

import ListItem from 'components/TopicListItem';
import { topicShape } from 'constants/shapes';
import styles from './styles';

const TopicList = ({ list, onPress }) => (
  <FlatList
    data={list}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    keyExtractor={({ topic: { id } }) => id.toString()}
    renderItem={({ item: { topic } }) => (
      <ListItem item={topic} onPress={onPress} />
    )}
    style={styles.flatList}
  />
);

TopicList.propTypes = {
  list: arrayOf(topicShape).isRequired,
  onPress: func.isRequired,
};

TopicList.defaultProps = {
  list: [],
};

export default TopicList;
