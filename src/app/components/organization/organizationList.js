(function () {
  'use strict';

  var module = angular.module("app");

  function orgList($http) {
    return $http.get(API_URL + "organization/")
    .then(function (response) {
      return response.data;
    });
  }

  function controller($http) {
    var model = this;
    model.organizations = [];

    model.$onInit = function () {
      orgList($http).then(function (organizations) {
        model.organizations = organizations.results;
      });
    };

    model.goTo = function (id) {
      model.$router.navigate(["OrgDetails", {id: id}]);
    };
  }

  module.component("organizationList", {
    templateUrl: "app/components/organization/organizationList.html",
    controllerAs: "model",
    controller: ["$http", controller],
    bindings: {
      $router: "<"
    }
  });
}());
