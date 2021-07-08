const fastify = require('../../server');

const { connectDB } = require('../../config/db/postgress');

describe('Validar resultado de las rutas de [Cupones]', () => {
  afterAll(async (done) => {
    fastify.close();
    connectDB.end();
    done();
  });

  test('Respuesta de la API: Crea un cupón [POST `api/vouchers/add`]', async (done) => {
    const response = await fastify.inject({
      method: 'POST',
      url: 'api/vouchers/add',
      payload: {
        discountPercent: '10',
        initDate: '2020/01/01',
        endDate: '2020/02/01',
      },
    });
    expect(response.statusCode).toBe(201);
    done();
  });

  test('Respuesta de la API: Actualizar cupón [PUT `api/vouchers/edit/:id`]', async (done) => {
    const response = await fastify.inject({
      method: 'PUT',
      url: 'api/vouchers/edit/100',
      payload: {
        discountPercent: '10',
        initDate: '2020/01/01',
        endDate: '2020/02/01',
        state: false,
      },
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('Respuesta de la API: Listar los cupóns [GET `api/vouchers/list`]', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: 'api/vouchers/list',
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('Respuesta de la API: Datos de 1 cupón [GET `api/vouchers/:id`]', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: 'api/vouchers/100',
    });
    expect(response.statusCode).toBe(200);
    done();
  });
});
