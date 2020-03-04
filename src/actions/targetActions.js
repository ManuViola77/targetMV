import { createThunk } from '@rootstrap/redux-tools';

import targetService from 'services/targetService';
import parseError from 'utils/parseError';

const CREATE_TARGET = 'CREATE_TARGET';
const DELETE_TARGET = 'DELETE_TARGET';
const GET_TARGETS = 'GET_TARGETS';

export const createTarget = createThunk(CREATE_TARGET, async target => {
  try {
    return (await targetService.createTarget({ target })).data;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const getTargets = createThunk(GET_TARGETS, async () => {
  try {
    return (await targetService.getTargets()).data.targets;
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
