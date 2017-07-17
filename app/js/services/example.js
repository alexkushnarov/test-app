/**
 * @ngdoc service
 * @name app.services:ExampleService
 *
 * @description
 * This is a service responsible for ..
 */
function ExampleService($http) {
  'ngInject';

  const service = {};
  /**
   * @ngdoc function
   * @name get
   *
   * @description
   * ....
   */
  service.get = function () {
    return new Promise((resolve, reject) => {
      $http.get('apiPath').success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'ExampleService',
  fn: ExampleService
};
