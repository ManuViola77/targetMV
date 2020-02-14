import { title, latitude, longitude, radius, topic_id } from 'constants/fields';
import strings from 'locale';

const { CREATE_TARGET_ERROR } = strings;

const createTargetValidations = {
  [latitude]: {
    presence: {
      value: true,
      message: CREATE_TARGET_ERROR.emptyLatitude,
    },
  },

  [longitude]: {
    presence: {
      value: true,
      message: CREATE_TARGET_ERROR.emptyLongitude,
    },
  },

  [radius]: {
    presence: {
      value: true,
      message: CREATE_TARGET_ERROR.emptyArea,
    },

    numericality: {
      greaterThan: 0,
      message: CREATE_TARGET_ERROR.areaNumeric,
    },
  },

  [title]: {
    presence: {
      value: true,
      message: CREATE_TARGET_ERROR.emptyTitle,
    },
  },

  [topic_id]: {
    presence: {
      value: true,
      message: CREATE_TARGET_ERROR.emptyTopic,
    },
  },
};

export default createTargetValidations;
