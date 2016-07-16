(function () {
  'use strict';

  var module = angular.module("app");

  function residenceList($http) {
    return $http.get(API_URL + "residence/")
    .then(function (response) {
      return response.data;
    });
  }

  function controller($http) {
    var model = this;
    model.recidencies = [];

    model.$onInit = function () {
      residenceList($http).then(function (recidencies) {
        model.recidencies = recidencies.results;
      });
    };

    model.goTo = function (id) {
      model.$router.navigate(["ResidenceDetails", {id: id}]);
    };
  }

  module.component("residenceList", {
    templateUrl: "app/components/residecy/residenceList.html",
    controllerAs: "model",
    controller: ["$http", controller],
    bindings: {
      $router: "<"
    }
  });
}());
