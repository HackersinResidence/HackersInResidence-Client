'use strict';

var module = angular.module("app");

module.factory('organizationResource', ['$resource', function ($resource) {
  var resource = $resource('http://api.hackers-in-residence.org/organization/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: false}});

  return {
          getOrganization: function() {
              return resource.get({id:1});
          },
          save: function(organization) {
              return resource.save(organization);
          },
          getAll: function() {
              return resource.get();
          }
      };
}]);
