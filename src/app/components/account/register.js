(function () {
  'use strict';

  var module = angular.module("app");

  function register($http, user) {
    return $http.post(USER_URL + "registration/", user)
    .success(function (res) {
      console.log(res);
    })
    .error(function (err) {
      console.log(err);
    });
  }

  function controller($http, $location, authToken, Validate) {
    var model = this;
    model.user = {username: "", email: "", password1: "", password2: ""};
    model.completed = false;

    model.$onInit = function () {
      model.isAuthenticated = authToken.isAuthenticated();
      if (model.isAuthenticated) {
        model.completed = true;
      }
    };

    model.register = function (formData) {
      model.errors = [];
      Validate.form_validation(formData, model, model.errors);
      if (!formData.$invalid) {
        register($http, model.user)
        .then(function () {
          // success case
          model.completed = true;
        }, function (data) {
          // error case
          model.errors = data.data;
        });
      }
    };

  }
  module.component("register", {
    templateUrl: "app/components/account/register.html",
    controllerAs: "model",
    controller: ["$http", "$location", "authToken", "Validate", controller]
  });
}());
