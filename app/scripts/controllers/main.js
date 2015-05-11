'use strict';

/**
 * @ngdoc function
 * @name jobMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobMarketApp
 */
angular.module('jobMarketApp')
  .controller('MainController', ['$scope', 'ngTableParams' ,function ($scope, ngTableParams) {

    //$scope.tableParams = new ngTableParams(parameters, settings);
   /* $scope.tableParams = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: jobs.length,
      getData: function($defer, params){
          $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });*/

  }]);
