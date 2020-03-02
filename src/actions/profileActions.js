import { createThunk } from '@rootstrap/redux-tools';

import profileService from 'services/profileService';
import parseError from 'utils/parseError';

const GET_PROFILE = 'GET_PROFILE';
const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const getProfile = createThunk(GET_PROFILE, async id => {
  try {
    const {
      data: { user },
    } = await profileService.getProfile(id);
    return user;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const updateProfile = createThunk(
  UPDATE_PROFILE,
  async (id, profile) => {
    try {
      await profileService.updateProfile(id, profile);
    } catch ({ data }) {
      throw parseError(data);
    }
  },
);

export const { success: getProfileSuccess } = getProfile;
export const { reset: updateProfileReset } = updateProfile;
