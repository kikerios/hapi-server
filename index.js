const config = require('./config')
const server = require('./server/server')

const host = config.get('/app/host')
const port = config.get('/app/port')

// Start the server with the host and port specified as passed-in arguments
module.exports = server.start(host, port)
