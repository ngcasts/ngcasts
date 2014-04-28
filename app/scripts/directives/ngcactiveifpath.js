'use strict';

angular.module('ngcastsApp')
    .directive('ngcActiveIfPath', function ($location) {
      return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
          var checkActivation = function () {
            if (attrs.ngcActiveIfPath === $location.path()) {
              element.addClass("active");
            } else {
              element.removeClass("active");
            }
          };
          scope.$on('$routeChangeSuccess', checkActivation);
        }
      };
    });
