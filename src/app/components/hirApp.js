'use strict';

var module = angular.module("app");

module.component("hirApp", {
  templateUrl: "app/components/hirApp.html",
  $routeConfig: [
    {path: "/", component: "app", name: "App"},
    {path: "/organization", component: "organization", name: "Organization"},
    {path: "/detail/:id", component: "orgDetails", name: "OrgDetails"},
    {path: "/login", component: "login", name: "Login"},
    {path: "/**", redirectTo: ["App"]}
  ]
});
