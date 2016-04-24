'use strict';

/**
 * @ngdoc function
 * @name aircheckApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aircheckApp
 */
angular.module('aircheckApp').controller('MainCtrl', function ($scope,$http) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.open=function(){
      // alert('h');
      $scope.showModal=$('#modalDetails').openModal();
    };
    // this works when the modal and trigger in the same page
    // $scope.modalDetails= function(){
      // $scope.id=id;
      // alert(id);
    //   $('#modalDetails').openModal();
    // };

    // this works in the menu (modal and trigger is seperated) but have some issues
    // $http.get('/#test').success(function() {
    //   $('#modalDetails').openModal();
    // });
    // $http.get('#/ ').success(function() {
    //   $('#modalDetails').closeModal();
    //
    // });

    // just test
    // $scope.modalClose= function(){
    //   $scope.dismisse();
    // };

    // map script
    // $scope.largeMap = function(){
    //   var map = new ol.Map({
    //     target: 'map',
    //     layers: [
    //       new ol.layer.Tile({
    //         source: new ol.source.MapQuest({layer: 'sat'})
    //       })
    //     ],
    //     view: new ol.View({
    //       center: ol.proj.fromLonLat([37.41, 8.82]),
    //       zoom: 4
    //     })
    //   });
    // };
  });
