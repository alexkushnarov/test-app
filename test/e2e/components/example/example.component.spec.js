/* global EC, browser, by, loginCredentials */
const HttpBackend = require('http-backend-proxy');

const proxy = new HttpBackend(browser);

describe('View tests', () => {

  beforeAll(() => {
    proxy.onLoad.reset();
  });

  beforeEach(() => {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', () => {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });
});
