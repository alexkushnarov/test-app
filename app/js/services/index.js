import angular from 'angular';

const bulk = require('bulk-require');

const servicesModule = angular.module('app.services', []);
const services = bulk(__dirname, ['./**/!(*index|*.spec|*.example|*example).js']);

function declare(serviceMap) {
  Object.keys(serviceMap).forEach((key) => {
    const item = serviceMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'function') {
      // console.log('declaring service: ' + item.name);
      servicesModule.service(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(services);
// NOTE: similar to angular.module('app.services').service

export default servicesModule;
