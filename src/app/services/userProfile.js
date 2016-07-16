'use strict';

var module = angular.module("app");

module.factory('userProfile', function ($window) {
  var storage = $window.localStorage;
  var cachedProfile;
  return {
    setProfile: function (user) {
      cachedProfile = {id: user.id, username: user.username, email: user.email};
      storage.setItem('id', user.id);
      storage.setItem('username', user.username);
      storage.setItem('email', user.email);
    },
    getProfile: function () {
      if (!cachedProfile) {
        cachedProfile = {
          id: storage.getItem('id'),
          username: storage.getItem('username'),
          email: storage.getItem('email')
        };
      }
      return cachedProfile;
    },
    deleteProfile: function () {
      cachedProfile = "";
      storage.clear();
    }
  };
});
