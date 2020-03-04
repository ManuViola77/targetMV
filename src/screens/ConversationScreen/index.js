import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';

import { getMessages } from 'actions/chatActions';
import { targetMatchParam } from 'constants/parameters';

const ConversationScreen = () => {
  const { matchId } = useNavigationParam(targetMatchParam);

  const dispatch = useDispatch();

  useEffect(() => {
    // parameters are id and page
    dispatch(getMessages(matchId, 1));
  }, []);

  const messages = useSelector(({ chat: { messages } }) => messages);

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

  return <Text>This is Conversation Screen {matchId}</Text>;
};

export default ConversationScreen;
