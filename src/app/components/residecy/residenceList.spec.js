describe('residenceList component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('residenceList', function () {
      return {
        templateUrl: 'app/resideceList.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<residenceList></residenceList>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
