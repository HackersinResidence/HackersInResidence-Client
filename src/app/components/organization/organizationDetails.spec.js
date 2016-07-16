describe('organizationDetails component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('organizationDetails', function () {
      return {
        templateUrl: 'app/organization/organizationDetails.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<organizationDetails></organizationDetails>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
