import React from 'react';
import { FlatList, View } from 'react-native';
import { array } from 'prop-types';

import ListItem from 'components/TopicListItem';
import styles from './styles';

const TopicList = ({ list }) => {
  return (
    <FlatList
      style={styles.flatList}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={list}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

TopicList.propTypes = {
  list: array.isRequired,
};

export default TopicList;
