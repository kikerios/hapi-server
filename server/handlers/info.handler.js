const config = require('../../config')

const version = () =>
  ({ version: config.get('/version') })

module.exports = {
  version,
}
