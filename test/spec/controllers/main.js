'use strict';

describe('Controller: MainCtrl', function () {
  var sampleEpisodes = [
    {number: 1, title: "asdf", description: "asdf"},
    {number: 2, title: "asdf2", description: "asdf2"}
  ];

  // load the controller's module
  beforeEach(module('ngcastsApp'));

  var MainCtrl,
      scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    $httpBackend = _$httpBackend_;

  }));

  it('should attach a list of episodes to the scope', function () {
    $httpBackend.expectGET('api/episodes.json').respond(sampleEpisodes);
    $httpBackend.flush();
    expect(angular.equals(scope.episodes, sampleEpisodes)).toBe(true);
  });
});
