import { createThunk } from '@rootstrap/redux-tools';

import { GET_TOPICS } from 'constants/topicActions';
import topicService from 'services/topicService';
import parseError from 'utils/parseError';

export const getTopics = createThunk(GET_TOPICS, async () => {
  try {
    const {
      data: { topics },
    } = await topicService.getTopics();
    return topics;
  } catch ({ data }) {
    throw parseError(data);
  }
});
