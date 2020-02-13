import { createThunk, createAction } from '@rootstrap/redux-tools';

import { CREATE_TARGET, TARGETS, TOPICS } from 'constants/targetActions';
import targetService from 'services/targetService';
import parseError from 'utils/parseError';

export const createTarget = createThunk(
  CREATE_TARGET,
  async (target, postAction, isHidden) => {
    console.log('creating target: ', target);
    try {
      const {
        data: { target: createdTarget },
      } = await targetService.createTarget({ target });
      console.log('createdTarget: ', createdTarget);
      postAction && postAction(isHidden);
    } catch ({ data }) {
      console.log('error data: ', data);
      throw parseError(data);
    }
  },
);

export const targets = createThunk(TARGETS, async () => {
  console.log('getting targets');
  try {
    const {
      data: { targets },
    } = await targetService.targets();
    console.log('targets: ', targets);
    return targets;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const topics = createThunk(TOPICS, async () => {
  console.log('getting topics');
  try {
    const {
      data: { topics },
    } = await targetService.topics();
    console.log('topics: ', topics);
    return topics;
  } catch ({ data }) {
    throw parseError(data);
  }
});
