'use strict';

angular
    .module('ngcastsApp', [
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ui.bootstrap',
      'hljs'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
          })
          .when('/episodes/:episodeNumber', {
            templateUrl: 'views/episodes.html',
            controller: 'EpisodesCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
    });
