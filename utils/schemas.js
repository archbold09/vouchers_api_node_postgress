const { responseError } = require('./response');

/* Respuesta errores de schema */
const errorsSchema = (app) => {
  app.setErrorHandler((error, request, reply) => {
    if (error.validation) {
      return responseError(request, reply, error.validation[0].message, 401, error);
    }
  });
};

/* Schemas personalizados para cada ruta */

const movieOptionParamsSchema = {
  type: 'object',
  properties: {
    movieOption: { type: 'string' },
  },
  required: ['movieOption'],
};

const idParamsSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  required: ['id'],
};

module.exports = {
  errorsSchema,
  movieOptionParamsSchema,
  idParamsSchema,
};
