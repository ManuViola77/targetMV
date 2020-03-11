import React, { useEffect, useMemo } from 'react';
import { Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigationParam } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';

import {
  createConsumer,
  getMessages,
  sendMessage,
  subscribe,
  unsubscribe,
} from 'actions/chatActions';
import { targetMatchParam } from 'constants/parameters';

const ConversationScreen = () => {
  const { matchId } = useNavigationParam(targetMatchParam);

  const dispatch = useDispatch();

  const info = useSelector(({ session: { info } }) => info);

  useEffect(() => {
    const dispatches = async () => {
      await dispatch(createConsumer(info));
      await dispatch(subscribe({ matchId }));
      // parameters are id and page
      await dispatch(getMessages(matchId, 1));
    };
    dispatches();
    return () => {
      dispatch(unsubscribe());
    };
  }, []);

  const messagesSession = useSelector(({ chat: { messages } }) => messages);

  let messages = useMemo(() => {
    if (messagesSession) {
      return (messages = messagesSession.map(message => {
        const { id } = message;
        return {
          ...message,
          _id: id,
        };
      }));
    }
  }, [messagesSession]);

  const handleOnSend = newMessages => {
    const [message] = newMessages;
    dispatch(sendMessage({ message, matchId }));
  };

  return (
    <>
      <Text>This is Conversation Screen {matchId}</Text>
      <GiftedChat
        messages={messages}
        onSend={handleOnSend}
        renderAvatar={null}
        alwaysShowSend
        renderMessage={({ currentMessage: { content } }) => (
          <Text>{content}</Text>
        )}
        invertibleScrollViewProps={{ overScrollMode: 'never' }}
        alignTop
        bottomOffset={0}
      />
    </>
  );
};

export default ConversationScreen;
