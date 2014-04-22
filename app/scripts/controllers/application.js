'use strict';

angular.module('ngcastsApp')
    .controller('ApplicationCtrl', function ($scope, $location) {
      $scope.isActive = function (route) {
        return route === $location.path();
      };
    });
