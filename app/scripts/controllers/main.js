'use strict';

angular.module('ngcastsApp')
    .controller('MainCtrl', function ($scope, Episode) {
      $scope.episodes = Episode.query();
          /*[
        {
          number: 1,
          title: "Creating an Angular app using Yeoman",
          description: "Yeoman helps you get started with AngularJS quickly by scaffolding workflows, while at the same time mixing in many of the best practices that have evolved within the industry."
        },
        {
          number: 2,
          title: "Mocking custom services",
          description: "Here we will create two services and will unit test the dependent service while mocking the other."
        },
        {
          number: 3,
          title: "SEO for Angular apps",
          description: "Learn how to configure your Angular app to be search engine friendly."
        }
      ];*/
    });
