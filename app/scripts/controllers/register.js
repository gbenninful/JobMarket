'use strict';

/**
 * @ngdoc function
 * @name jobMarketApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jobMarketApp
 */

angular.module('jobMarketApp')
  .controller('RegisterController', ['$scope','Models', 'Azure', 'Notifier', 'UserService', '$location', function ($scope, Models, Azure, Notifier, UserService, $location) {

    function anotherInit(){

      $scope.user = Models.User();

    }

    anotherInit();

    $scope.registerUser = function() {

      console.log('After several hours, I finally got it to work. Frustrating, exhilirating!');
      UserService.addUser($scope.user).then(function(user){

        Notifier.success('You successfully added a user');
        console.log(user);
        console.table(user);

      }, function(error){

        Notifier.error('You were unable to add a user');
        console.log(error);
      });

       $location.path('/signin');

    };

  }]);
