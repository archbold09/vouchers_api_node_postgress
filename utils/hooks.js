const { responseError } = require('./response');

module.exports = {
  /* validar opcion pelicula */
  validateOptionMovie: async (request, reply) => {
    if (request.params.movieOption === '') {
      return responseError(request, reply, 'Error parametro [MovieOption] vacio', 401, '[ERROR RUTA]: Error parametro [movieOption] vacio');
    }
  },

  /* validar parametro ID */
  validateParamId: async (request, reply) => {
    if (request.params.id === '') {
      return responseError(request, reply, 'Error parametro [id] vacio', 401, '[ERROR RUTA]: Error parametro [id] vacio');
    }
  },
};
