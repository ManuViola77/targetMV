import React, { useEffect, useMemo, useState } from 'react';
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
import defaultProfileImage from 'assets/images/default_profile_image.png';
import { CHAT_PAGE_COUNT } from 'constants/chat';
import { targetMatchParam } from 'constants/parameters';
import Send from 'components/chat/Send';
import Bubble from 'components/chat/Bubble';

const ChatScreen = () => {
  const { matchId } = useNavigationParam(targetMatchParam);

  const dispatch = useDispatch();

  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);

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
            user: {
              _id: messageUserId,
              avatar: url ? url : defaultProfileImage,
            },
          };
        })
        .reverse());
    }
  }, [messagesSession]);

  const handleOnSend = newMessages => {
    const [message] = newMessages;
    dispatch(sendMessage({ message, matchId }));
  };

  const getPreviousMessages = async () => {
    setIsLoadingEarlier(true);
    if (messages) {
      const page = Math.floor(messages.length / CHAT_PAGE_COUNT) + 1;
      await dispatch(getMessages(matchId, page));
    }
    setIsLoadingEarlier(false);
    return false;
  };

  const renderBubble = bubbleProps => <Bubble bubbleProps={bubbleProps} />;
  const renderSend = sendProps => <Send sendProps={sendProps} />;

  return (
    <>
      <GiftedChat
        alignTop
        alwaysShowSend
        bottomOffset={0}
        /*
        this explains why I set extraData:
        https://www.gitmemory.com/issue/FaridSafi/react-native-gifted-chat/1182/506336547
        */
        extraData={{ isLoadingEarlier }}
        isLoadingEarlier={isLoadingEarlier}
        loadEarlier
        messages={messages}
        onLoadEarlier={getPreviousMessages}
        onSend={handleOnSend}
        renderBubble={renderBubble}
        renderSend={renderSend}
        showUserAvatar
        user={{
          _id: userId,
        }}
      />
    </>
  );
};

export default ChatScreen;
