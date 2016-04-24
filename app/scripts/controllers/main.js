'use strict';

/**
 * @ngdoc function
 * @name aircheckApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aircheckApp
 */

angular.module('aircheckApp').controller('MainCtrl', function ($scope,$http,$location) {

  // $http.get('http://127.0.0.1:9000/reports/').
  //       success(function(data) {
  //           $scope.greeting = data;
  //       });
  //
  //       error(function(data) {
  //           $scope.greeting = data;
  //       });

        $http.get('file:///D:/json/countries.json').success(function(data){

            $scope.countries=data;
            });

      $('.dropdown-button').dropdown({
        belowOrigin: true,
        alignment: 'left',
        inDuration: 200,
        outDuration: 150,
        constrain_width: true,
        hover: false,
        gutter: 1
      });


  // $scope.collapsibleElements = [{
  //         icon: 'mdi-image-filter-drama',
  //         title: 'First',
  //         content: 'Lorem ipsum dolor sit amet.'
  //     },{
  //         icon: 'mdi-maps-place',
  //         title: 'Second',
  //         content: 'Lorem ipsum dolor sit amet.'
  //     },{
  //         icon: 'mdi-social-whatshot',
  //         title: 'Third',
  //         content: 'Lorem ipsum dolor sit amet.'
  //     }
  // ];
      $scope.difficultyBreathing=false;
    $scope.difficultyBreathingToggle= function(){

      if($scope.difficultyBreathing) {
        $scope.difficultyBreathing=false;
      } else {
        $scope.difficultyBreathing=true;
      }
    };

    //
      $scope.itchyEye=false;
    $scope.itchyEyeToggle= function(){

      if($scope.itchyEye) {
        $scope.itchyEye=false;
      } else {
        $scope.itchyEye=true;
      }
    };
//

    $scope.sneezing=false;
    $scope.sneezingToggle= function(){

      if($scope.sneezing) {
        $scope.sneezing=false;
      } else {
        $scope.sneezing=true;
      }
    };

//
    $scope.coughing=false;
    $scope.coughingToggle= function(){

      if($scope.coughing) {
        $scope.coughing=false;
      } else {
        $scope.coughing=true;
      }
    };


//
    $scope.fever=false;
    $scope.feverToggle= function(){

      if($scope.fever) {
        $scope.fever=false;
      } else {
        $scope.fever=true;
      }
    };





    $scope.open=function(modalName){
      $scope.modalName=modalName;
      $(modalName).openModal();
    };
    // close Modal
    $scope.close=function(modalName){
      $scope.modalName=modalName;
      $(modalName).closeModal();
    };


    $scope.datepicker =function(){
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
        // $('.datepicker').va()
    };

    $scope.users={

    };

    $scope.addUser=function(userInfo){

      // $scope.users = angular.copy(userInfo);

      userInfoAdd.push(userInfo);
      $location.path('#/');

      // not working
      $scope.close('#signInModal');


    };
    // $scope.user={
    //   fName:"dd";
    //   lName:"ff";
    // };

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
