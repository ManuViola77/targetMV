import { Platform } from 'react-native';
import ActionCable from 'actioncable';

import { ANDROID, IOS } from 'constants/common';

ActionCable.getConfig = () => null;

ActionCable.createWebSocketURL = url => url.replace(/^http/, 'ws');

const oldOpen = ActionCable.Connection.prototype.open;
ActionCable.Connection.prototype.open = function open() {
  const result = oldOpen.apply(this);
  this.webSocket.protocol = 'actioncable-v1-json';
  return result;
};

if (Platform.OS === IOS || Platform.OS === ANDROID) {
  global.document = {
    addEventListener() {},
    removeEventListener() {},
  };
}

export default ActionCable;
