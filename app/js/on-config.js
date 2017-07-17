/* eslint curly: off*/
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(false);
  $locationProvider.hashPrefix('');

  // if user entered fake url -> he will be redirected to login page
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    template: '<sample-app reddit-data="$resolve.redditData"></sample-app>',
    title: 'Home',
    resolve: {
      redditData: apiService => {
        return apiService.getData()
          .then(({data}) => data);
      }
    }
  });
}

export default OnConfig;
