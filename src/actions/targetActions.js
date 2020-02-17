import { createThunk, createAction } from '@rootstrap/redux-tools';

import { CREATE_TARGET, TARGETS, TOPICS } from 'constants/targetActions';
import targetService from 'services/targetService';
import parseError from 'utils/parseError';

export const createTarget = createThunk(
  CREATE_TARGET,
  async (target, postAction, isHidden) => {
    try {
      const {
        data: { target: createdTarget },
      } = await targetService.createTarget({ target });
      postAction && postAction(isHidden);
    } catch ({ data }) {
      throw parseError(data);
    }
  },
);

export const getTargets = createThunk(TARGETS, async () => {
  try {
    const {
      data: { targets },
    } = await targetService.targets();
    return targets;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const getTopics = createThunk(TOPICS, async () => {
  try {
    const {
      data: { topics },
    } = await targetService.topics();
    return topics;
  } catch ({ data }) {
    throw parseError(data);
  }
});
