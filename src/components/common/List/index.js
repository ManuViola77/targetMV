import React from 'react';
import { FlatList, View } from 'react-native';
import { array } from 'prop-types';

import ListItem from 'components/common/ListItem';
import styles from './styles';

const List = ({ list }) => {
  return (
    <FlatList
      style={styles.flatList}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={list}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

List.propTypes = {
  list: array.isRequired,
};

export default List;
