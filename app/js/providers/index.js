import angular from 'angular';

const bulk = require('bulk-require');

const servicesModule = angular.module('app.providers', []);
const services = bulk(__dirname, ['./**/!(*index|*.spec|*.example|*example).js']);

function declare(serviceMap) {
  Object.keys(serviceMap).forEach((key) => {
    const item = serviceMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'function') {
      console.log('declaring service: ' + item.name);
      servicesModule.provider(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(services);
export default servicesModule;
