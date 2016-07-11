describe('Api service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Api) {
    expect(Api.getData()).toEqual(3);
  }));
});
