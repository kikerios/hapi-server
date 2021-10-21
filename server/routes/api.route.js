const api = require('../handlers/api.handler')

// routes(server)
const routes = () => [
  {
    method: 'GET',
    path: '/api/v1',
    config: {
      handler: api.version,
    },
  },
]

module.exports = routes
