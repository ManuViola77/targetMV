import { createThunk } from '@rootstrap/redux-tools';

import targetService from 'services/targetService';
import parseError from 'utils/parseError';

const CREATE_TARGET = 'CREATE_TARGET';
const DELETE_TARGET = 'DELETE_TARGET';
const GET_TARGETS = 'GET_TARGETS';

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

export const { reset: createTargetReset } = createTarget;
export const { reset: deleteTargetReset } = deleteTarget;
export const { success: getTargetsSuccess } = getTargets;
