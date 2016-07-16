'use strict';

var module = angular.module("app");

module.factory('organizationResource', ['$http', '$q', function ($http, $q) {
  var baseUrl = API_URL;

  var service = {
    request: function (args) {
      var params = args.params || {};
      args = args || {};
      var deferred = $q.defer();
      var url = baseUrl + args.url + "/";
      var method = args.method || "GET";
      var data = args.data || {};
      // Fire the request, as configured.
      $http({
        url: url,
        method: method.toUpperCase(),
        params: params,
        data: data
      })
      .success(angular.bind(this, function (data, status) {
        deferred.resolve(data, status);
      }))
      .error(angular.bind(this, function (data, status, headers, config) {
        console.log("error syncing with: " + url);
        // Set request status
        if (data) {
          data.status = status;
        }
        if (status === 0) {
          if (data === "") {
            data = {};
            data.status = 0;
            data.non_field_errors = ["Could not connect. Please try again."];
          }
          // or if the data is null, then there was a timeout.
          if (data === null) {
            // Inject a non field error alerting the user
            // that there's been a timeout error.
            data = {};
            data.status = 0;
            data.non_field_errors = ["Server timed out. Please try again."];
          }
        }
        deferred.reject(data, status, headers, config);
      }));
      return deferred.promise;
    },
    get: function (id) {
      return this.request({
        method: "GET",
        url: "organization/" + id
      });
    },
    getAll: function () {
      return this.request({
        method: "GET",
        url: "organization"
      });
    }
  };

  return service;
}]);
