import React, { useEffect, useMemo } from 'react';
import { Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigationParam } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';

import {
  clearChatState,
  createConsumer,
  disconnectActionCable,
  getMessages,
  sendMessage,
  subscribe,
  unsubscribe,
} from 'actions/chatActions';
import { targetMatchParam } from 'constants/parameters';

const ChatScreen = () => {
  const { matchId } = useNavigationParam(targetMatchParam);

  const dispatch = useDispatch();

  const info = useSelector(({ session: { info } }) => info);
  const userId = useSelector(({ session: { userId } }) => userId);

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
      dispatch(disconnectActionCable());
      dispatch(clearChatState());
    };
  }, []);

  const messagesSession = useSelector(({ chat: { messages } }) => messages);

  let messages = useMemo(() => {
    if (messagesSession) {
      return (messages = messagesSession
        .map(message => {
          const {
            id,
            content,
            date,
            user: {
              id: messageUserId,
              avatar: { url },
            },
          } = message;
          return {
            _id: id,
            text: content,
            createdAt: date,
            user: { _id: messageUserId, avatar: url },
          };
        })
        .reverse());
    }
  }, [messagesSession]);

  console.log('messages: ', messages);

  const handleOnSend = newMessages => {
    const [message] = newMessages;
    dispatch(sendMessage({ message, matchId }));
  };

  return (
    <>
      <GiftedChat
        alignTop
        alwaysShowSend
        bottomOffset={0}
        messages={messages}
        onSend={handleOnSend}
        showUserAvatar
        user={{
          _id: userId,
        }}
      />
    </>
  );
};

export default ChatScreen;
