const { responseError } = require('./response');

const errorHandler = (request, reply, message, state) => {
  responseError(request, reply, message, state, `[Error Controller]: ${message}`);
};

module.exports = { errorHandler };
