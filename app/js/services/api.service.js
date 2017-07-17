'use strict';

/**
 * @ngdoc service
 * @name apiService
 *
 * @description
 * sample api service for api calls to reddit
 */
function apiService($http) {
	'ngInject';

	return {
		getData
	};

	/**
	* @ngdoc function
	* @name getData
	* @methodOf apiService
	*
	* @description
	* get data from reddit
	*
	* @return {Promise}
	*/
	function getData() {
		return $http.get('https://www.reddit.com/r/all.json');
	}
}

export default {
  name: 'apiService',
  fn: apiService
};
