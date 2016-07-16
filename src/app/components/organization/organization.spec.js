describe('organization component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('organization', function () {
      return {
        templateUrl: 'app/organization.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<organization></organization>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
