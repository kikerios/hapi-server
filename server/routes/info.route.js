const info = require('../handlers/info.handler')

// routes(server)
const routes = () => [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: info.version,
    },
  },
]

module.exports = routes
