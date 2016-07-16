(function () {
  'use strict';

  var module = angular.module("app");

  function login($http, authToken, user) {
    return $http.post(USER_URL + "login/", user)
    .success(function (res) {
      authToken.setToken(res.key);
    })
    .error(function (err) {
      console.log(err);
    });
  }

  function userDetails($http, userProfile) {
    return $http.get(API_URL + "profile/")
    .success(function (res) {
      userProfile.setProfile(res);
    })
    .error(function (err) {
      console.log(err);
    });
  }

  function controller($http, $location, authToken, userProfile, Validate) {
    var model = this;
    model.user = {username: '', password: ''};
    model.isAuthenticated = authToken.isAuthenticated();

    if (model.isAuthenticated) {
      model.profile = userProfile.getProfile();
    }

    model.login = function (formData) {
      model.errors = [];
      Validate.form_validation(formData, model, model.errors);
      if (!formData.$invalid) {
        login($http, authToken, model.user)
        .then(function () {
          // success case
          userDetails($http, userProfile);
          $location.path("/");
        }, function (data) {
          // error case
          model.errors = data.data;
        });
      }
    };

    model.logout = function () {
      authToken.deleteToken();
      $location.path("/");
    };
  }
  module.component("login", {
    templateUrl: "app/components/account/login.html",
    controllerAs: "model",
    controller: ["$http", "$location", "authToken", "userProfile", "Validate", controller]
  });
}());
