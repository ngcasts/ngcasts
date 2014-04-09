'use strict';

angular.module('ngcastsApp')
  .service('Episode', function Episode($resource) {
      return $resource('episodes/:episodeNumber.json');
  });
