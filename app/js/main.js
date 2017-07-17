'use strict';

import angular from 'angular';

// angular modules
import uiRouterExtras from 'ui-router-extras';
import onConfig from './on-config';

import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';
import './components';
import './providers';

if (process.env.NODE_ENV === 'test') {
  require('angular-mocks');
}

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.components',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.providers',
  'app.directives',
  'ct.ui.router.extras'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').config(onConfig);

/**
 * Bootstrap the app if an asyncronous service
 * has resolved. Wating for the app to intialize
 * after loading google API
 */
 angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'], {
    strictDi: false
  });
});
