exports.httpBackendMock = function() {
  angular.module('httpBackendMock', ['ngcastsApp', 'ngMockE2E'])
      .run(function($httpBackend) {
        var sampleEpisodes = [
          {
            "number": 1,
            "title": "Creating an AngularJS app using Yeoman",
            "description": "Yeoman helps you get started with AngularJS quickly by scaffolding workflows, while at the same time mixing in many of the best practices that have evolved within the industry."
          },
          {
            "number": 2,
            "title": "Unit testing AngularJS services",
            "description": "Here we will create two services and unit test the dependent service while mocking the other."
          },
          {
            "number": 3,
            "title": "SEO for Angular apps",
            "description": "Learn how to configure your Angular app to be search engine friendly."
          }
        ];

        $httpBackend.whenGET('/api/episodes').respond(sampleEpisodes);
      });
}