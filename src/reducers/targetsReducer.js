import { createReducer } from '@rootstrap/redux-tools';
import {
  createTargetReset,
  createTargetSuccess,
  getTargetsSuccess,
} from 'actions/targetActions';

const initialState = { targetsList: [] };

const targetsReducer = {
  [createTargetReset]: store => {
    store.matchedUser = undefined;
    store.matchId = undefined;
  },

  [createTargetSuccess]: (store, action) => {
    const {
      payload,
      payload: { matchConversation },
    } = action;
    if (matchConversation) {
      const {
        matchedUser,
        matchConversation: { id },
      } = payload;
      store.matchedUser = matchedUser;
      store.matchId = id;
    }
  },

  [getTargetsSuccess]: (store, action) => {
    store.targetsList = action.payload;
  },
};

export default createReducer(initialState, targetsReducer);
