'use strict';

angular.module('ngcastsApp')
    .controller('MainCtrl', function ($scope) {
      $scope.episodes = [
        {
          number: 1,
          title: "Creating an Angular app using Yeoman",
          description: "Yeoman helps you get started with AngularJS quickly by scaffolding workflows, while at the same time mixing in many of the best practices that have evolved within the industry."
        },
        {
          number: 1,
          title: "Creating an Angular app using Yeoman",
          description: "Yeoman helps you get started with AngularJS quickly by scaffolding workflows, while at the same time mixing in many of the best practices that have evolved within the industry."
        }
      ];
    });
