import { createReducer } from '@rootstrap/redux-tools';
import {
  createTargetReset,
  createTargetSuccess,
  getTargetsSuccess,
} from 'actions/targetActions';

const initialState = { targetsList: [] };

const targetsReducer = {
  [createTargetReset]: (store, action) => {
    store.matchedUser = undefined;
    store.matchId = undefined;
  },

  [createTargetSuccess]: (store, action) => {
    if (action.payload.matchConversation) {
      const {
        matchedUser,
        matchConversation: { id },
      } = action.payload;
      store.matchedUser = matchedUser;
      store.matchId = id;
    }
  },

  [getTargetsSuccess]: (store, action) => {
    store.targetsList = action.payload;
  },
};

export default createReducer(initialState, targetsReducer);
