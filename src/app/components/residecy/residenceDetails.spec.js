describe('residenceDetails component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('residenceDetails', function () {
      return {
        templateUrl: 'app/residenceDetails.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<residenceDetails></residenceDetails>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
