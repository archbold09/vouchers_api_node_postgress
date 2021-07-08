const fastify = require('../../server');

const { connectDB } = require('../../config/db/postgress');

describe('Validar resultado de las rutas de [Clientes]', () => {
  afterAll(async (done) => {
    fastify.close();
    connectDB.end();
    done();
  });

  test('Respuesta de la API: Crea un cliente [POST `api/clients/add`]', async (done) => {
    const response = await fastify.inject({
      method: 'POST',
      url: 'api/clients/add',
      payload: {
        name: 'Test',
        lastname: 'Test',
        documentNumber: '124567890',
      },
    });
    expect(response.statusCode).toBe(201);
    done();
  });

  test('Respuesta de la API: Actualizar cliente [PUT `api/clients/edit/:id`]', async (done) => {
    const response = await fastify.inject({
      method: 'PUT',
      url: 'api/clients/edit/100',
      payload: {
        name: 'Test',
        lastname: 'Test',
        documentNumber: '124567890',
        state: false,
      },
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('Respuesta de la API: Listar los clientes [GET `api/clients/list`]', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: 'api/clients/list',
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('Respuesta de la API: Datos de 1 cliente [GET `api/clients/:id`]', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: 'api/clients/100',
    });
    expect(response.statusCode).toBe(200);
    done();
  });
});
