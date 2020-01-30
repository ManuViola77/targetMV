import validate from 'validate.js';

validate.validators.presence.options = { allowEmpty: false };

export default (values, constraints, options) =>
  validate(values, constraints, { fullMessages: false, ...options });
