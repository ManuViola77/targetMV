import { createThunk } from '@rootstrap/redux-tools';

import topicService from 'services/topicService';
import parseError from 'utils/parseError';

const GET_TOPICS = 'GET_TOPICS';

export const getTopics = createThunk(GET_TOPICS, async () => {
  try {
    return (await topicService.getTopics()).data.topics;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: getTopicsSuccess } = getTopics;
