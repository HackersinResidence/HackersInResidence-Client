angular.module("app").factory("authHttpRequestInterceptor", ["authToken",
function (authToken) {
  return {
    request: function (config) {
      // This is the authentication service that I use.
      // I store the bearer token in the local storage and retrieve it when needed.
      // You can use your own implementation for this
      var token = authToken.getToken();

      if (token) {
        config.headers.Authorization = 'Token ' + token;
      }

      return config;
    }
  };
}]);

angular.module("app").config([
  "$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push('authHttpRequestInterceptor');
  }]);
