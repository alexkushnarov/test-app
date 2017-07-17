require('babel-register');

const gulpConfig = require('../gulp/config').default;

exports.config = {

  allScriptsTimeout: 11000,

  baseUrl: `http://localhost:${gulpConfig.testPort}/`,

  capabilities: {
    browserName: 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER,
    name: 'Protractor Tests'
  },

  framework: 'jasmine2',

  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },

  specs: [
    'e2e/**/*.js'
  ],

  getPageTimeout: 30000,

  sauceUser: process.env.SAUCE_USERNAME,

  sauceKey: process.env.SAUCE_ACCESS_KEY,

  directConnect: true,

  onPrepare: function () {
    const width = 1300;
    const height = 976;
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    // setup global vars
    global.EC = protractor.ExpectedConditions;

    browser.manage().timeouts().setScriptTimeout(60000);
    browser.driver.manage().window().setSize(width, height);
    browser.driver.manage().window().maximize();
  }
};
