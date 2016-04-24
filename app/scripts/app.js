'use strict';

/**
 * @ngdoc overview
 * @name aircheckApp
 * @description
 * # aircheckApp
 *
 * Main module of the application.
 */
angular
  .module('aircheckApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
