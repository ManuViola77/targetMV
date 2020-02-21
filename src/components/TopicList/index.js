import React from 'react';
import { FlatList, View } from 'react-native';
import { arrayOf, func, number, shape, string } from 'prop-types';

import ListItem from 'components/TopicListItem';
import styles from './styles';

const TopicList = ({ list, onPress }) => (
  <FlatList
    style={styles.flatList}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    data={list}
    renderItem={({ item }) => <ListItem item={item.topic} onPress={onPress} />}
    keyExtractor={({ topic: { id } }) => id.toString()}
  />
);

TopicList.propTypes = {
  list: arrayOf(
    shape({
      topic: shape({
        icon: string,
        id: number,
        label: string,
      }),
    }),
  ).isRequired,
  onPress: func.isRequired,
};

TopicList.defaultProps = {
  list: [],
};

export default TopicList;
