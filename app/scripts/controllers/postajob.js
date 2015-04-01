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

    $scope.categories = [ 'Quality Assurance Engineer', 'SDET', 'Software Developer Engineer',  'Project Manager', 'Designer', 'Business/Exec', 'Database Administrator', 'Other' ];

    $scope.jobPost = function (){

      JobService.postAJob($scope.job, function(data){

        console.log($scope.job);
        Notifier.success('Your Job Posting was successful');

      }, function(error){
        Notifier.error('Sorry, Your Job Posting failed. Please review the error and try again');
        console.log(error);

      } );
    };




  }]);
