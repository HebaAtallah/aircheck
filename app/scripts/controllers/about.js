'use strict';

/**
 * @ngdoc function
 * @name aircheckApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aircheckApp
 */
angular.module('aircheckApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
