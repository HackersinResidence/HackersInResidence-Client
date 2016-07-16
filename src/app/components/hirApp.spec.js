describe('hirApp component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('hirApp', function () {
      return {
        templateUrl: 'app/hirApp.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<hirApp></hirApp>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
