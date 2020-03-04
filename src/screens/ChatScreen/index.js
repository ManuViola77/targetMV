import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getConversations } from 'actions/chatActions';
import { targetMatchParam } from 'constants/parameters';
import { CONVERSATION_SCREEN } from 'constants/screens';
import MatchesList from 'components/MatchesList';

const ChatScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversations());
  }, []);

  const conversations = useSelector(({ chat: { matches } }) => matches);

  return (
    <MatchesList
      list={conversations}
      onPress={item =>
        navigation.push(CONVERSATION_SCREEN, { [targetMatchParam]: item })
      }
    />
  );
};
export default ChatScreen;
