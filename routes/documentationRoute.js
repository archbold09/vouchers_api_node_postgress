module.exports = (app, opts, next) => {
  /*  Docuemtancion Vouchers */

  app.get(
    '/vouchers/list',
    {
      schema: {
        description: 'Consultar cupones.',
        tags: ['vouchers'],
      },
    },
    (req, reply) => {}
  );

  app.get(
    '/vouchers/:id',
    {
      schema: {
        description: 'Consultar datos de un cupon.',
        tags: ['vouchers'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['true'],
        },
      },
    },
    (req, reply) => {}
  );

  app.post(
    '/vouchers/add',
    {
      schema: {
        description: 'Agregar cupón.',
        tags: ['vouchers'],
        body: {
          type: 'object',
          properties: {
            discountPercent: {
              type: 'string',
              example: '10',
              required: ['true'],
            },
            initDate: {
              type: 'string',
              example: '2020/01/01',
              required: ['true'],
            },
            endDate: {
              type: 'string',
              example: '2020/02/01',
              required: ['true'],
            },
          },
        },
        response: {
          200: {
            description: 'Cupón creado correctamente',
            type: 'string',
          },
        },
      },
    },
    (req, reply) => {}
  );

  app.put(
    '/vouchers/edit/:id',
    {
      schema: {
        description: 'Editar un cupón.',
        tags: ['vouchers'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['true'],
        },
        response: {
          200: {
            description: 'Cupón actualizado correctamente.',
            type: 'string',
          },
        },
      },
    },
    (req, reply) => {}
  );

  app.delete(
    '/vouchers/delete/:id',
    {
      schema: {
        description: 'Eliminar un cupon.',
        tags: ['vouchers'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['true'],
        },
        response: {
          200: {
            description: 'Cupón eliminado correctamente.',
            type: 'string',
          },
        },
      },
    },
    (req, reply) => {}
  );

  /*  Docuemtancion Clients */

  app.get(
    '/clients/list',
    {
      schema: {
        description: 'Consultar clientes.',
        tags: ['clients'],
      },
    },
    (req, reply) => {}
  );

  app.get(
    '/clients/:id',
    {
      schema: {
        description: 'Consultar datos de un cliente.',
        tags: ['clients'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['true'],
        },
      },
    },
    (req, reply) => {}
  );

  app.post(
    '/clients/add',
    {
      schema: {
        description: 'Agregar cliente.',
        tags: ['clients'],
        body: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'Test',
              required: ['true'],
            },
            lastname: {
              type: 'string',
              example: 'Test',
              required: ['true'],
            },
            documentNumber: {
              type: 'string',
              example: '124567890',
              required: ['true'],
            },
          },
        },
        response: {
          200: {
            description: 'Cliente creado correctamente',
            type: 'string',
          },
        },
      },
    },
    (req, reply) => {}
  );

  app.put(
    '/clients/edit/:id',
    {
      schema: {
        description: 'Editar un cliente.',
        tags: ['clients'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['true'],
        },
        response: {
          200: {
            description: 'Cliente actualizado correctamente.',
            type: 'string',
          },
        },
      },
    },
    (req, reply) => {}
  );

  app.delete(
    '/clients/delete/:id',
    {
      schema: {
        description: 'Eliminar un cliente.',
        tags: ['clients'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
          required: ['true'],
        },
        response: {
          200: {
            description: 'Cliente eliminado correctamente.',
            type: 'string',
          },
        },
      },
    },
    (req, reply) => {}
  );

  next();
};
