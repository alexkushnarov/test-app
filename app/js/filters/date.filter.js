/* global moment */
'use strict';

/**
 * @ngdo function
 * @name unixFromNow
 *
 * @description
 * convert milliseconds to minutes
 *
 * @param {Number} milliseconds.
*/
const unixFromNow = function () {
	return function (unix) {
		return moment.unix(unix).fromNow();
	};
};

export default {
	name: 'unixFromNow',
	fn: unixFromNow
};
