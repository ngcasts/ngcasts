'use strict';

angular.module('ngcastsApp')
    .controller('MainCtrl', function ($scope, Episode) {
      $scope.episodes = Episode.query();
    });
