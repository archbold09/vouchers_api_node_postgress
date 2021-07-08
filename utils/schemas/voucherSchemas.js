const { responseError } = require('../response');

/* Respuesta errores de schema */
const errorsSchema = (app) => {
  app.setErrorHandler((error, request, reply) => {
    if (error.validation) {
      return responseError(request, reply, error.validation[0].message, 401, error);
    }
  });
};

/* Schemas personalizados para cada ruta */

/* Agregar */
const addSchema = {
  properties: {
    discountPercent: { type: 'string' },
    initDate: { type: 'string' },
    endDate: { type: 'string' },
  },
  required: ['discountPercent', 'initDate', 'endDate'],
};

const editSchema = {
  properties: {
    discountPercent: { type: 'string' },
    initDate: { type: 'string' },
    endDate: { type: 'string' },
    state: { type: 'boolean' },
  },
  required: ['discountPercent', 'initDate', 'endDate', 'state'],
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
  addSchema,
  editSchema,
  idParamsSchema,
};
