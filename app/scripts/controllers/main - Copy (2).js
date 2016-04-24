'use strict';

/**
 * @ngdoc function
 * @name aircheckApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aircheckApp
 */

angular.module('aircheckApp').controller('MainCtrl', function ($scope,$http,$location) {

  // testing model
  //   $scope.filterCondition={
  //      operator: 'eq'
  //  }
  //
  //  $scope.operators = [
  //      {value: 'eq', displayName: 'equals'},
  //      {value: 'neq', displayName: 'not equal'}
  //   ]



  // $scope.Items = [{
  //       Name: "Sever"
  //   }, {
  //       Name: "Item two"
  //   }, {
  //       Name: "Item three"
  //   }];
  //   $scope.checkAll = function () {
  //       if ($scope.selectedAll) {
  //           $scope.selectedAll = true;
  //       } else {
  //           $scope.selectedAll = false;
  //       }
  //       angular.forEach($scope.Items, function (item) {
  //           item.Selected = $scope.selectedAll;
  //       });
  //
  //   };
  $scope.xtoggle = function(){
    console.log("gg");
    $scope.x=true;
    $scope.x({
          inDuration: 300,
          outDuration: 225,
          constrain_width: true, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
      );
  };

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

    // $scope.test=function(){
    //   // alert("d0");
    //   $('.select').material_select();
    // };


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
