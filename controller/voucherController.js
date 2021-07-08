const { nanoid } = require('nanoid');
const VoucherModel = require('../models/voucherModel');
const { responseSuccess, responseError } = require('../utils/response');
const { errorHandler } = require('../utils/errorHandler');

module.exports = {
  listVouchers: async (request, reply) => {
    try {
      const Model = new VoucherModel();

      const result = await Model.listVouchers();

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
      const Model = new VoucherModel();

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
      const Model = new VoucherModel();

      const data = {
        codeVoucher: nanoid(10),
        discountPercent: request.body.discountPercent,
        initDate: request.body.initDate,
        endDate: request.body.endDate,
        state: true,
      };

      const result = await Model.add(data);

      if (!result.rowCount) {
        return errorHandler(request, reply, 'Error al crear cupón.', 202);
      }

      return responseSuccess(request, reply, 'Cupón creado correctamente', 201);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },

  edit: async (request, reply) => {
    try {
      const Model = new VoucherModel();

      const data = {
        id: request.params.id,
        discountPercent: request.body.discountPercent,
        initDate: request.body.initDate,
        endDate: request.body.endDate,
        state: request.body.state,
      };

      const result = await Model.edit(data);

      if (result.rowCount != 1) {
        return errorHandler(request, reply, 'Error al editar el cupón.', 202);
      }

      return responseSuccess(request, reply, 'Cupón actualizado correctamente.', 200);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },

  delete: async (request, reply) => {
    try {
      const Model = new VoucherModel();

      const data = {
        id: request.params.id,
        state: false,
      };

      const result = await Model.delete(data);

      if (result.rowCount != 1) {
        return errorHandler(request, reply, 'Error al eliminar el cupón.', 202);
      }

      return responseSuccess(request, reply, 'Cupón eliminado correctamente.', 200);
    } catch (error) {
      return responseError(request, reply, 'Error interno.', 500, error);
    }
  },
};
