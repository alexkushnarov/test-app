/**
 * @ngdoc component
 * @name HeaderComponent
 *
 * @description
 * HeaderComponent is a component responsible for naviagting through App main views.
 */
const FooterComponent = {
  templateUrl: 'sample-app/footer/footer.component.html',
  controllerAs: 'model',
  controller: [function () {
    'ngInject';
    const model = this;
    model.$onInit = () => {
      console.log('Footer component controller initialized');
    };
  }]
};

export default {
  name: 'appFooter',
  obj: FooterComponent
};
