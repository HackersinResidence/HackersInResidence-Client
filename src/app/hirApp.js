'use strict';

var module = angular.module("app");

module.component("hirApp", {
  templateUrl: "app/hirApp.html",
  $routeConfig: [
      {path: "/", component: "app", name: "App"},
      {path: "/organization", component: "organization", name: "Organization"},
      {path: "/**", redirectTo: ["App"]}
  ]
});
