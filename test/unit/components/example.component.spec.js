// /*global angular*/
// describe('Unit: <login-web> component', function () {
//
//   let componentCtrl;
//   let scope;
//   let state;
//
//   const stateObj = {
//     name: 'home.search',
//     template: '<search></search>',
//     title: 'Search',
//     url: '/search',
//   };
//
//  beforeEach(angular.mock.module('app'));
//   beforeEach(angular.mock.module('app.services'));
//   beforeEach(angular.mock.module('sample'));
//
//   beforeEach(angular.mock.inject($httpBackend => {
//    $httpBackend.whenGET('locales/en.json').respond(200, '');
//   }));
//
//   beforeEach(angular.mock.inject(($componentController, $state, $rootScope) => {
//     scope = $rootScope.$new();
//     state = $state;
//     spyOn(state, 'go').and.returnValue(Promise.resolve(stateObj));
//     componentCtrl = $componentController('loginWeb', {
//       $scope: scope,
//     });
//   }));
//
//   it('controller should be defined', () => {
//     expect(componentCtrl).toBeDefined();
//   });
// });
