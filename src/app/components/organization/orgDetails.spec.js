describe('orgDetails component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('orgDetails', function () {
      return {
        templateUrl: 'app/orgDetails.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<orgDetails></orgDetails>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
