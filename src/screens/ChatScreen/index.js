import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getConversations } from 'actions/chatActions';
import MatchesList from 'components/MatchesList';

const ChatScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
  }, []);

  const conversations = useSelector(({ chat: { matches } }) => matches);

  return (
    <MatchesList
      list={conversations}
      // TODO: onPress={item => navigate to conversation sending item as parameter}
    />
  );
};
export default ChatScreen;
