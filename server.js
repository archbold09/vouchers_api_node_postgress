const { config } = require('./config');

const fastifyCors = require('fastify-cors');
const helmet = require('fastify-helmet');

const app = require('fastify')({
  logger: {
    prettyPrint: true,
  },
});

/* Middlewares */
app.register(helmet);

/* CORS */
app.register(fastifyCors, {});

/* Rutas */
app.register(require('./routes/vouchersRoute'), {
  prefix: '/api',
});

app.register(require('./routes/clientsRoute'), {
  prefix: '/api',
});

// Registrar Swagger
const { swaggerOptions } = require('./documentation/documentation');
app.register(require('fastify-swagger'), swaggerOptions);
app.register(require('./routes/documentationRoute'));

const initServer = async () => {
  try {
    await app.listen(config.port);
    app.log.info(`Corriendo en el puerto http://localhost:${config.port}`);
  } catch (error) {
    app.log.error(error);
  }
};

initServer();

module.exports = app;
