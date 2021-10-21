const _ = require('lodash')
const Confidence = require('confidence')
const ToBoolean = require('to-boolean')

const pack = require('./package.json')

const config = {
  $meta: 'This file defines all configuration for project.',
  name: pack.name,
  version: pack.version,
  description: pack.description,
  app: {
    host: process.env.APP_HOST || 'localhost',
    port: process.env.APP_PORT || 3020,
  },
  logger: {
    options: {
      console: ToBoolean(_.defaultTo(process.env.LOGGER_DEBUG, true)),
    },
  },
}

const store = new Confidence.Store(config)
const criteria = {
  env: process.env.APP_ENV,
}

module.exports = {
  get: key => store.get(key, criteria),
  meta: key => store.meta(key, criteria),
}
