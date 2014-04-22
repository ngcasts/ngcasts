'use strict';

describe('Controller: EpisodesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngcastsApp'));

  var EpisodesCtrl,
      scope,
      routeParams = {episodeNumber: 5};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EpisodesCtrl = $controller('EpisodesCtrl', {
      $scope: scope,
      $routeParams: routeParams
    });
  }));

  it("should have a url to the episode's html instructions", function () {
    expect(scope.episodeInstructions).toBe("api/episodes/" + routeParams.episodeNumber + ".html");
  });
});
