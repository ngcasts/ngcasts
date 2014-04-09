'use strict';

angular
    .module('ngcastsApp', [
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
    });
