import Config from 'react-native-config';

import {
  createConsumer,
  disconnectActionCable,
  receiveMessage,
  sendMessage,
  subscribe,
  unsubscribe,
} from 'actions/chatActions';
import { clearOnboarding } from 'actions/onboardingActions';
import actionCable from './actionCable';
import { CHAT_CHANNEL, SEND_MESSAGE } from 'constants/chat';
import { applyQueryParams } from 'utils/helpers';

const actionCableMiddleware = (() => {
  let cable = null;
  const chatChannels = [];

  return store => next => action => {
    switch (action.type) {
      case createConsumer.toString(): {
        cable && cable.disconnect();
        const { uid } = action.payload;

        const queryParams = {
          uid,
        };

        cable = actionCable.createConsumer(
          applyQueryParams(Config.CABLE_URL, queryParams),
        );

        break;
      }

      case subscribe.toString(): {
        const { matchId } = action.payload;

        const channel = cable.subscriptions.create(
          { channel: CHAT_CHANNEL, match_conversation_id: matchId },
          {
            received: data => {
              const message = data;

              store.dispatch(receiveMessage({ message }));
            },
            speak: (message, matchId) => {
              const { text: content } = message;

              const data = {
                match_conversation_id: matchId,
                content,
              };

              channel.perform(SEND_MESSAGE, data);
            },
          },
        );
        chatChannels.push(channel);
        break;
      }

      case unsubscribe.toString(): {
        const channel = chatChannels.shift();
        channel && channel.unsubscribe();
        store.dispatch(clearOnboarding());
        break;
      }

      case disconnectActionCable.toString(): {
        cable && cable.disconnect();
        break;
      }

      case sendMessage.toString(): {
        const { message, matchId } = action.payload;
        const [channel] = chatChannels;
        channel.speak(message, matchId);
        break;
      }

      default:
        break;
    }
    next(action);
  };
})();

export default actionCableMiddleware;
