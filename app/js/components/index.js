import angular from 'angular';

const bulk = require('bulk-require');

const componentsModule = angular.module('app.components', []);
const components = bulk(__dirname, ['./**/!(*index|*.spec|*.temp).js']);

function declare(componentMap) {
  Object.keys(componentMap).forEach((key) => {
    const item = componentMap[key];

    if (!item) {
      return;
    }

    if (item.obj && typeof item.obj === 'object') {
      //console.log('Declaring component ' + item.name);
      // console.log('Component object: ', item.obj);
      componentsModule.component(item.name, item.obj);
    } else {
      declare(item);
    }
  });
}

declare(components);

export default componentsModule;
