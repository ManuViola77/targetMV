import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getConversations } from 'actions/chatActions';
import { targetMatchParam } from 'constants/parameters';
import { CHAT_SCREEN } from 'constants/screens';
import MatchesList from 'components/MatchesList';

const ChatListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Refresh conversations when it comes back from ChatScreen
    const focusListener = navigation.addListener('didFocus', () => {
      dispatch(getConversations());
    });

    return () => focusListener.remove();
  }, []);

  const conversations = useSelector(({ chat: { matches } }) => matches);

  return (
    <MatchesList
      list={conversations}
      onPress={item =>
        navigation.push(CHAT_SCREEN, { [targetMatchParam]: item })
      }
    />
  );
};
export default ChatListScreen;
