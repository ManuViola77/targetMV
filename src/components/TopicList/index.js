import React from 'react';
import { FlatList, View } from 'react-native';
import { array, func } from 'prop-types';

import ListItem from 'components/TopicListItem';
import styles from './styles';

const TopicList = ({ list, onPress }) => {
  return (
    <FlatList
      style={styles.flatList}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={list}
      renderItem={({ item }) => (
        <ListItem item={item.topic} onPress={onPress} />
      )}
      keyExtractor={item => item.topic.id.toString()}
    />
  );
};

TopicList.propTypes = {
  list: array.isRequired,
  onPress: func.isRequired,
};

TopicList.defaultProps = {
  list: [],
};

export default TopicList;
