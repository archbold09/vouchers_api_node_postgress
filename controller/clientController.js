const ClientModel = require('../models/clientModel');
const { responseSuccess, responseError } = require('../utils/response');
const { errorHandler } = require('../utils/errorHandler');

module.exports = {
  listClients: async (request, reply) => {
    try {
      const Model = new ClientModel();

      const result = await Model.listClients();

      if (!result) {
        return errorHandler(request, reply, 'Error al obtener los datos.', 202);
      }

      return responseSuccess(request, reply, result, 200);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },

  get: async (request, reply) => {
    try {
      const Model = new ClientModel();

      const data = {
        id: request.params.id,
      };

      const result = await Model.get(data);

      if (!result[0]) {
        return errorHandler(request, reply, 'Error al obtener los datos.', 202);
      }

      return responseSuccess(request, reply, result, 200);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },

  add: async (request, reply) => {
    try {
      const Model = new ClientModel();

      const data = {
        name: request.body.name,
        lastname: request.body.lastname,
        documentNumber: request.body.documentNumber,
        state: true,
      };

      const result = await Model.add(data);

      if (!result.rowCount) {
        return errorHandler(request, reply, 'Error al crear cliente.', 202);
      }

      return responseSuccess(request, reply, 'Cliente creado correctamente', 201);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },

  edit: async (request, reply) => {
    try {
      const Model = new ClientModel();

      const data = {
        id: request.params.id,
        name: request.body.name,
        lastname: request.body.lastname,
        documentNumber: request.body.documentNumber,
        state: request.body.state,
      };

      const result = await Model.edit(data);

      if (result.rowCount != 1) {
        return errorHandler(request, reply, 'Error al editar el cliente.', 202);
      }

      return responseSuccess(request, reply, 'Cliente actualizado correctamente.', 200);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },

  delete: async (request, reply) => {
    try {
      const Model = new ClientModel();

      const data = {
        id: request.params.id,
        state: false,
      };

      const result = await Model.delete(data);

      if (result.rowCount != 1) {
        return errorHandler(request, reply, 'Error al eliminar el cliente.', 202);
      }

      return responseSuccess(request, reply, 'Cliente eliminado correctamente.', 200);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },
};
