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
    name: { type: 'string' },
    lastname: { type: 'string' },
    documentNumber: { type: 'string' },
  },
  required: ['name', 'lastname', 'documentNumber'],
};

const editSchema = {
  properties: {
    name: { type: 'string' },
    lastname: { type: 'string' },
    documentNumber: { type: 'string' },
    state: { type: 'boolean' },
  },
  required: ['name', 'lastname', 'documentNumber', 'state'],
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
