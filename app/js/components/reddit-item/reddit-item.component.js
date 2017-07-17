/**
 * @ngdoc component
 * @name sampleApp
 *
 * @description
 * sampleApp is a main container component responsible for storing all main parts of the app.
*/
const RedditItemComponent = {
    templateUrl: 'reddit-item/reddit-item.component.html',
    controllerAs: 'model',
    bindings: {
      ups: '=',
      img: '=',
      title: '=',
      createdUtc: '=',
      author: '=',
      numComments: '='
    },
    controller
};

function controller() {
  'ngInject';
  const model = this;
}

export default {
  name: 'redditItem',
  obj: RedditItemComponent
};
