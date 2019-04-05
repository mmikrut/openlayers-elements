/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires  */
const merge = require('webpack-merge')
const bsSettings = require('@open-wc/testing-karma-bs/bs-settings.js')
const karmaEs5Config = require('./karma.es5.config.js')

module.exports = (config) => {
  config.set(
    merge(bsSettings(config), karmaEs5Config(config), {
      browserStack: {
        project: '@openlayers-elements/maps',
      },
    }),
  )

  return config
}