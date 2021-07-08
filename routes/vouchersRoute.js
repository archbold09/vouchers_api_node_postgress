module.exports = (app, opts, next) => {
  /* Configuracion de rutas */
  const { errorsSchema, addSchema, editSchema, idParamsSchema } = require('../utils/schemas/voucherSchemas');
  const hooks = require('../utils/hooks');
  const controller = require('../controller/voucherController');

  /* Manejo errores rutas */
  errorsSchema(app);

  /* Consultar todos los cupones*/
  app.route({
    method: 'GET',
    url: '/vouchers/list',
    handler: controller.listVouchers,
  });

  /* Consultar 1 cupon*/
  app.route({
    method: 'GET',
    url: '/vouchers/:id',
    schema: {
      params: idParamsSchema,
    },
    preHandler: (request, reply, done) => {
      hooks.validateParamId(request, reply);
      done();
    },
    handler: controller.get,
  });

  /* Crear 1 cupon*/
  app.route({
    method: 'POST',
    url: '/vouchers/add',
    schema: {
      body: addSchema,
    },
    handler: controller.add,
  });

  /* Editar 1 cupon*/
  app.route({
    method: 'PUT',
    url: '/vouchers/edit/:id',
    schema: {
      params: idParamsSchema,
      body: editSchema,
    },
    preHandler: (request, reply, done) => {
      hooks.validateParamId(request, reply);
      done();
    },
    handler: controller.edit,
  });

  /* Eliminar 1 cupon*/
  app.route({
    method: 'DELETE',
    url: '/vouchers/delete/:id',
    schema: {
      params: idParamsSchema,
    },
    preHandler: (request, reply, done) => {
      hooks.validateParamId(request, reply);
      done();
    },
    handler: controller.delete,
  });

  next();
};
