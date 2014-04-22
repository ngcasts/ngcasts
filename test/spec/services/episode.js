'use strict';

describe('Service: Episode', function () {

  var sampleEpisodes = [
    {number: 1, title: "asdf", description: "asdf"},
    {number: 2, title: "asdf2", description: "asdf2"}
  ];

  // load the service's module
  beforeEach(module('ngcastsApp'));

  // instantiate service
  var Episode, $httpBackend;
  beforeEach(inject(function (_Episode_, _$httpBackend_) {
    Episode = _Episode_;
    $httpBackend = _$httpBackend_;
  }));

  it('should be defined', function () {
    expect(!!Episode).toBe(true);
  });

  it('should return a list of episodes', function () {
    $httpBackend.expectGET('api/episodes.json').respond(sampleEpisodes);
    var episodes = Episode.query();
    $httpBackend.flush();
    expect(angular.equals(episodes, sampleEpisodes)).toBe(true);
  });

  it('should return an episode by number', function () {
    $httpBackend.expectGET('api/episodes/1.json').respond(sampleEpisodes[0]);
    var episode = Episode.get({episodeNumber: 1});
    $httpBackend.flush();
    expect(angular.equals(episode, sampleEpisodes[0])).toBe(true);
  });
});
