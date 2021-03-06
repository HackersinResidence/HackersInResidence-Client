'use strict';

var module = angular.module("app");

module.component("hirApp", {
  templateUrl: "app/components/hirApp.html",
  $routeConfig: [
    {path: "/", component: "app", name: "App"},
    {path: "/organizations", component: "organizationList", name: "Organizations"},
    {path: "/organizations/detail/:id", component: "orgDetails", name: "OrgDetails"},
    {path: "/residencies", component: "residenceList", name: "Residencies"},
    {path: "/residencies/detail/:id", component: "residenceDetails", name: "ResidenceDetails"},
    {path: "/login", component: "login", name: "Login"},
    {path: "/register", component: "register", name: "Register"},
    {path: "/**", redirectTo: ["App"]}
  ]
});
