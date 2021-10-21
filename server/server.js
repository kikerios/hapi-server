const Hapi = require('@hapi/hapi')
const config = require('../config')
const plugins = require('./plugins')
const routes = require('./routes')

const logger = require('bucker').createLogger({ console: config.get('/logger/options/console') }, module)

const start = async (host, port) => {
  const server = Hapi.server({ host, port })

  await server.register(plugins)
  server.route(routes(server))

  await server.start()

  server.events.on('response', (request) => {
    logger.info(`${request.info.remoteAddress}: ${request.method.toUpperCase()} ${request.path} --> ${request.response.statusCode}`)
  })

  logger.info('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  logger.info(err)
  process.exit(1)
})

module.exports = {
  start,
}
