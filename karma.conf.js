// Karma configuration
// Generated on Mon Jan 11 2021 16:28:27 GMT+0900 (Japan Standard Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'test/**/*.test.js'
    ],

    frameworks: ['mocha', 'chai'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['FirefoxHeadless', 'ChromiumHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
}
