/* global angular: false */

require('../error-message-ng/error-message-ng.scss');

require('react-ng/react-ng')({
  Icon: require('icon/icon')
});

angular.module('Ring.error-message', []).
  directive('errorMessage', [function () {
    return {
      replace: true,
      transclude: true,
      template: require('./error-message-ng.html'),
      restrict: 'E',
      scope: {
        code: '@',
        message: '@',
        links: '=',
        icon: '@'
      }
    };
  }]);
