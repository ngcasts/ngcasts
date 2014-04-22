'use strict';

angular.module('ngcastsApp')
    .controller('EpisodesCtrl', function ($scope, $routeParams, Episode) {
      $scope.episodeInstructions = "api/episodes/" + $routeParams.episodeNumber + ".html";
      $scope.episodeInfo = Episode.get({episodeNumber: $routeParams.episodeNumber});
    });
