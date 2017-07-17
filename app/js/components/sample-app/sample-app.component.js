/**
 * @ngdoc component
 * @name sampleApp
 *
 * @description
 * sampleApp is a main container component responsible for storing all main parts of the app.
*/
const SampleAppComponent = {
    templateUrl: 'sample-app/sample-app.component.html',
    controllerAs: 'model',
    bindings: {
      redditData: '='
    },
    controller
};

function controller() {
  'ngInject';
  const model = this;
  model.$onInit = () => {
    console.log('Sample App component controller initialized', model);
  };
}

export default {
  name: 'sampleApp',
  obj: SampleAppComponent
};
