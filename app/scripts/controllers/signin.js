'use strict';

/**
 * @ngdoc function
 * @name jobMarketApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the jobMarketApp
 */
angular.module('jobMarketApp')
  .controller('SignInController', ['$scope', 'Models', 'Notifier', 'Azure', function ($scope, Models, Notifier, Azure) {
    //$scope.user = Models.User();

    $scope.signInUser = function(){
        console.log('Hello signed in user. No errors yet!');
    }

  }]);
