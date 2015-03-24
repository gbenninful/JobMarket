'use strict';

/**
 * @ngdoc function
 * @name jobMarketApp.controller:PostajobCtrl
 * @description
 * # PostajobCtrl
 * Controller of the jobMarketApp
 */
angular.module('jobMarketApp')
  .controller('PostAJobController', ['$scope','Models', 'Azure', 'JobService', 'Notifier', function ($scope, Models, Azure, JobService, Notifier ) {

    function init(){
      $scope.job = Models.JobPosting();

    }

    init();

    $scope.jobPost = function (){

      JobService.postAJob($scope.job,function(data){

        Notifier.success('Your Job Posting was successful');
        console.log($scope.job);
        console.log(data);


      }, function(error){
        Notifier.error('Sorry, Your Job Posting failed. Please review the error and try again');
        console.log(error);

      } );


    };
  }]);
