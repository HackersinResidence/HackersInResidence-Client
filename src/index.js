"use strict";

var API_URL = "http://127.0.0.1:8000/api/v1/";
var USER_URL = "http://127.0.0.1:8000/rest-auth/";

var module = angular.module("app", ["ngComponentRouter", "ngAnimate", 'ngResource']);

module.value("$routerRootComponent", "hirApp");
