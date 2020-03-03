import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getConversations } from 'actions/chatActions';
import MatchesList from 'components/MatchesList';
import styles from './styles';

const ChatScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
  }, []);

  const conversations = useSelector(({ chat: { matches } }) => matches);

  return (
    <MatchesList
      list={conversations}
      onPress={item => console.log('item selected: ', item)}
    />
  );
};
export default ChatScreen;
