describe('organizationList component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('organizationList', function () {
      return {
        templateUrl: 'app/components/organization/organizationList.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<organizationList></organizationList>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
