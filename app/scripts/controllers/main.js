'use strict';

angular.module('ngcastsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.episodes = [
      {
        number: 1,
        title: "Creating an Angular app using Yeoman",
        description: "Yeoman is awesome. yeoman.io"
      }
    ];
  });
