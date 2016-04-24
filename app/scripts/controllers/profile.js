angular.module('aircheckApp').controller('profileCtrl', function ($scope) {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('ul.tabs').tabs();

  $scope.profile=true;
  $scope.setting=false;

  // $scope.x=false;
  $scope.profileTab= function(){

    if(! $scope.profile) {
      $scope.profile=true;
      $scope.setting=false;
    }
  };

  $scope.settingTab= function(){
    if(! $scope.setting) {
      $scope.profile=false;
      $scope.setting=true;
    }

  };
});
