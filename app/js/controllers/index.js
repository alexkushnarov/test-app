import angular from 'angular';

const bulk = require('bulk-require');
const controllersModule = angular.module('app.controllers', []);
const controllers = bulk(__dirname, ['./**/!(*index|*.spec|*example).js']);

function declare(controllerMap) {
  Object.keys(controllerMap).forEach((key) => {
    let item = controllerMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'function') {
      // console.log('declaring controller: ' + item.name);
      controllersModule.controller(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(controllers);

export default controllersModule;
