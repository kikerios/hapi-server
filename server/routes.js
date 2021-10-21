const info = require('./routes/info.route')
const api = require('./routes/api.route')

const routes = server =>
  [].concat(info(server), api(server))

module.exports = routes
