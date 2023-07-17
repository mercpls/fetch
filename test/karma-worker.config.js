// eslint-disable-next-line no-undef
const parentConfig = require('./karma.config')

// eslint-disable-next-line no-undef
module.exports = function(config) {
  parentConfig(config)
  config.set({
    frameworks: ['detectBrowsers', 'mocha'],
    files: [
      'test/worker-adapter.js',
      {
        pattern: '{test,dist}/*.js',
        included: false
      },
      {
        pattern: 'node_modules/{mocha,chai,abortcontroller-polyfill/dist}/*.js',
        included: false,
        watched: false
      }
    ]
  })
}
