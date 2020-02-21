import { createThunk } from '@rootstrap/redux-tools';

import {
  CREATE_TARGET,
  DELETE_TARGET,
  GET_TARGETS,
} from 'constants/targetActions';
import targetService from 'services/targetService';
import parseError from 'utils/parseError';

export const createTarget = createThunk(
  CREATE_TARGET,
  async (target, postAction, isHidden) => {
    try {
      await targetService.createTarget({ target });
      postAction && postAction(isHidden);
    } catch ({ data }) {
      throw parseError(data);
    }
  },
);

export const getTargets = createThunk(GET_TARGETS, async () => {
  try {
    const {
      data: { targets },
    } = await targetService.getTargets();
    return targets;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const deleteTarget = createThunk(DELETE_TARGET, async idTarget => {
  try {
    await targetService.deleteTarget(idTarget);
  } catch ({ data }) {
    throw parseError(data);
  }
});
