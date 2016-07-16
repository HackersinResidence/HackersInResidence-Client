'use strict';

var module = angular.module("app");

module.factory('authToken', function ($window) {
  var storage = $window.localStorage;
  var cachedToken;
  return {
    setToken: function (token) {
      cachedToken = token;
      storage.setItem('userToken', token);
    },
    getToken: function () {
      if (!cachedToken) {
        cachedToken = storage.getItem('userToken');
      }
      return cachedToken;
    },
    isAuthenticated: function () {
      return Boolean(this.getToken());
    },
    deleteToken: function () {
      cachedToken = "";
      storage.clear();
    }
  };
});
