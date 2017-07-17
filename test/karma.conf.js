const istanbul = require('browserify-istanbul');
const isparta  = require('isparta');

const karmaBaseConfig = {
  basePath: '../',

  singleRun: true,

  frameworks: ['jasmine', 'browserify'],

  preprocessors: {
    'app/js/**/*.js': ['browserify', 'coverage'],
    'test/**/*.js': ['browserify']
  },

  browsers: ['Chrome'],

  // reporters: ['spec', 'progress', 'coverage'],
  reporters: ['mocha', 'coverage'],
	coverageReporter: {
		dir: 'coverage/',
		reporters: [
			{
				type: 'lcovonly',
				subdir: '.'
			},
			{
				type: 'html',
				subdir: '.'
			}
		]
	},
  browserNoActivityTimeout: 100000,
  // reporter options
  mochaReporter: {
      output: 'full',
      showDiff: true,
      ignoreSkipped: true
  },
  // disabling concole logs
  client: {
    captureConsole: false
  },

  autoWatch: true,

  browserify: {
    debug: true,
    extensions: ['.js'],
    transform: [
      'babelify',
      ['debowerify', {preferNPM: true}],
      'browserify-ngannotate',
      'bulkify',
      istanbul({
        instrumenter: isparta,
        ignore: ['**/node_modules/**', '**/test/**']
      })
    ]
  },

  proxies: {
    '/': 'http://localhost:9876/'
  },

  urlRoot: '/__karma__/',

  files: [
    'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
    'https://maps.googleapis.com/maps/api/js?libraries=places',
    'app/components/lodash/dist/lodash.min.js',
    'app/components/moment/moment.js',
    // app-specific code
    'app/js/main.js',

    // 3rd-party resources
    'node_modules/angular-mocks/angular-mocks.js',

    // test files
    'test/unit/**/*.js'
  ]

};

const customLaunchers = {
  chrome: {
    base: 'SauceLabs',
    browserName: 'chrome'
  }
};

const ciAdditions = {
  sauceLabs: {
    testName: 'Karma Unit Tests',
    startConnect: false,
    build: process.env.TRAVIS_BUILD_NUMBER,
    tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
  },
  browsers: Object.keys(customLaunchers),
  customLaunchers: customLaunchers,
  reporters: ['progress', 'coverage', 'saucelabs']
};

module.exports = function (config) {
  karmaBaseConfig.logLevel = config.LOG_DISABLE;
  const isCI = process.env.CI && Boolean(process.env.TRAVIS_PULL_REQUEST);
  config.set(isCI ? Object.assign(karmaBaseConfig, ciAdditions) : karmaBaseConfig);
};
