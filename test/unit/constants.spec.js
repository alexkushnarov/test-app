/*global angular*/
describe('Unit: Constants', function () {

  let constants;

  beforeEach(function () {
    // instantiate the app module
    angular.mock.module('app');
		angular.mock.inject($httpBackend => {
			$httpBackend.whenGET('locales/en.json').respond(200, '');
		});
    // mock the directive
    angular.mock.inject((AppSettings) => {
      constants = AppSettings;
    });
  });

  it('should exist', function () {
    expect(constants).toBeDefined();
  });

  it('should have an application name', function () {
    expect(constants.appTitle).toEqual('sample');
  });

  it('should have Server Keys', function () {
    expect(constants.SERVER_KEYS).toBeDefined();
  });

});
