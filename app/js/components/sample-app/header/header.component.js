/**
 * @ngdoc component
 * @name HeaderComponent
 *
 * @description
 * HeaderComponent is a component responsible for naviagting through App main views.
 */
const HeaderComponent = {
  controller,
  templateUrl: 'sample-app/header/header.component.html',
  controllerAs: 'vm'
};

export default {
  name: 'appHeader',
  obj: HeaderComponent
};

function controller() {
  'ngInject';

  /**
   * @ngdoc property
   * @name vm
   *
   * @description
   * vm is an instance of the current component.
   */
  const vm = this;

  vm.$onInit = () => {
  };

  /**
   * Cleaning up component.
   * - destroy query object listener
   */
  vm.$onDestroy = () => {
  };
}
