(function () {
  'use strict';

  var module = angular.module("app");

  function getOrganization($http, id) {
    return $http.get(API_URL + "organization/" + id + "/")
    .then(function (response) {
      return response.data;
    });
  }
  function getOrganizationResidencies($http, id) {
    return $http.get(API_URL + "organization/" + id + "/residencies" + "/")
    .then(function (response) {
      return response.data.results;
    });
  }

  module.component("orgDetails", {
    templateUrl: "app/components/organization/orgDetails.html",
    controllerAs: "model",
    controller: function ($http) {
      var model = this;

      model.organization = {};
      model.residencies = [];

      model.$routerOnActivate = function (next) {
        model.id = next.params.id;
        getOrganization($http, model.id).then(function (organization) {
          model.organization = organization;
        });
        getOrganizationResidencies($http, model.id).then(function (residencies) {
          model.residencies = residencies;
        });
      };
    }
  });
}());
