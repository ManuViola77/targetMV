import React from 'react';
import { FlatList } from 'react-native';
import { arrayOf, func } from 'prop-types';

import ListItem from 'components/MatchesListItem';
import { matchesShape } from 'constants/shapes';

const MatchesList = ({ list, onPress }) => (
  <FlatList
    data={list}
    keyExtractor={({ matchId }) => matchId.toString()}
    renderItem={({ item }) => <ListItem item={item} onPress={onPress} />}
  />
);

MatchesList.propTypes = {
  list: arrayOf(matchesShape).isRequired,
  onPress: func.isRequired,
};

MatchesList.defaultProps = {
  list: [],
};

export default MatchesList;
