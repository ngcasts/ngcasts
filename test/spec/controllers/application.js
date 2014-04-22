'use strict';

describe('Controller: ApplicationCtrl', function () {

  // load the controller's module
  beforeEach(module('ngcastsApp'));

  var ApplicationCtrl,
      scope,
      location = {
        path: function(){
          return "/contact"
        }
      };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicationCtrl = $controller('ApplicationCtrl', {
      $scope: scope,
      $location: location
    });
  }));

  it('should check for url match', function () {
    expect(scope.isActive("/contact")).toBeTruthy();
  });
});
