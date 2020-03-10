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

  console.log('in ConversationScreen, messages: ', messages);

  const handleOnSend = newMessages => {
    const [message] = newMessages;
    dispatch(sendMessage({ message, matchId }));
  };

  /* 
  messages item format: 
  {
    "id": 1,
    "content": "Hi!",
    "date": "21/7/2017 15:42",
    "user": {
      "id": 1,
      "avatar": {
        "url": "/topic/icon/1/eb7bf9f2-62be-451c-af5b-5b41150eef1c.jpg"
      }
    }
  } 
  */

  return (
    <>
      <Text>This is Conversation Screen {matchId}</Text>
      <GiftedChat
        messages={messages}
        onSend={handleOnSend}
        renderAvatar={null}
        placeholder="Write something"
        alwaysShowSend
        //renderMessage={renderBubble}
        renderMessage={({ currentMessage: { content } }) => (
          <Text>{content}</Text>
        )}
        //renderInputToolbar={renderInputToolbar}
        //listViewProps={{ contentContainerStyle: styles.list }}
        invertibleScrollViewProps={{ overScrollMode: 'never' }}
        //user={user}
        alignTop
        //minInputToolbarHeight={INPUT_TOOL_BAR_MIN_HEIGHT}
        bottomOffset={0}
      />
    </>
  );
};

export default ConversationScreen;
