(function () {
  'use strict';

  var module = angular.module("app");

  function getResidence($http, id) {
    return $http.get(API_URL + "residence/" + id + "/")
    .then(function (response) {
      return response.data;
    });
  }
  function getResidenceOffers($http, id) {
    return $http.get(API_URL + "residence/" + id + "/offer" + "/")
    .then(function (response) {
      return response.data.results;
    });
  }
  function getResidenceRequires($http, id) {
    return $http.get(API_URL + "residence/" + id + "/requires" + "/")
    .then(function (response) {
      return response.data.results;
    });
  }

  module.component("residenceDetails", {
    templateUrl: "app/components/residecy/residenceDetails.html",
    controllerAs: "model",
    controller: function ($http) {
      var model = this;

      model.residence = {};
      model.offers = [];
      model.requires = [];

      model.$routerOnActivate = function (next) {
        model.id = next.params.id;
        getResidence($http, model.id).then(function (residence) {
          model.residence = residence;
        });
        getResidenceOffers($http, model.id).then(function (offers) {
          model.offers = offers;
        });
        getResidenceRequires($http, model.id).then(function (requires) {
          model.requires = requires;
        });
      };
    }
  });
}());
