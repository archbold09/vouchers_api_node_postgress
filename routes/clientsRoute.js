module.exports = (app, opts, next) => {
  /* Configuracion de rutas */
  const { errorsSchema, addSchema, editSchema, idParamsSchema } = require('../utils/schemas/clientSchemas');
  const hooks = require('../utils/hooks');
  const controller = require('../controller/clientController');

  /* Manejo errores rutas */
  errorsSchema(app);

  /* Consultar todos los clientes*/
  app.route({
    method: 'GET',
    url: '/clients/list',
    handler: controller.listClients,
  });

  /* Consultar 1 cliente*/
  app.route({
    method: 'GET',
    url: '/clients/:id',
    schema: {
      params: idParamsSchema,
    },
    preHandler: (request, reply, done) => {
      hooks.validateParamId(request, reply);
      done();
    },
    handler: controller.get,
  });

  /* Crear 1 cliente*/
  app.route({
    method: 'POST',
    url: '/clients/add',
    schema: {
      body: addSchema,
    },
    handler: controller.add,
  });

  /* Editar 1 cliente*/
  app.route({
    method: 'PUT',
    url: '/clients/edit/:id',
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

  // /* Eliminar 1 cliente*/
  app.route({
    method: 'DELETE',
    url: '/clients/delete/:id',
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
