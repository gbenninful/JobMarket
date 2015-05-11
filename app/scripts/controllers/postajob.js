'use strict';

/**
 * @ngdoc function
 * @name jobMarketApp.controller:PostajobCtrl
 * @description
 * # PostajobCtrl
 * Controller of the jobMarketApp
 */
angular.module('jobMarketApp')
  .controller('PostAJobController', ['$scope','Models', 'Azure', 'JobService', '$location', 'Notifier', function ($scope, Models, Azure, JobService, $location, Notifier ) {

    //Binding the model object to the scope
    function init(){

      $scope.job = Models.JobPosting();
    }

    init();


    //Job Categories data for radio buttons
    $scope.jobCategories = [
      { val: 0, txt: 'Quality Assurance Engineer'},
      { val: 1, txt: 'SDET'},
      { val: 2, txt: 'Software Developer Engineer'},
      { val: 3, txt: 'Project Manager'},
      { val: 4, txt: 'Designer'},
      { val: 5, txt: 'Business/Exec'},
      { val: 6, txt: 'Support Engineer'},
      { val: 7, txt: 'Database Administrator'},
      { val: 8, txt: 'Other' }
    ];

    //Previewing Job posting in Modal
   /* $scope.previewPostAJob = function(){


    };*/


      //Post Job Info to Azure when user clicks on Publish button
    $scope.postAJob = function (){

      $('#myModal').modal('hide');

      //Saving Job Information
      JobService.postAJob($scope.job).then( function(job){

        Notifier.success('Your Job Posting was successful');
        console.log(job);

      //Getting posted Jobs
        JobService.getAllJobs().then(function(retrievedJobs){

          Notifier.success('You succeeded in getting all the posted jobs');
          console.log(retrievedJobs.length);
          console.table(retrievedJobs);
          $scope.retrievedJobs = retrievedJobs;

        }, function(error){
            Notifier.error('Your get all posted jobs operation failed');
            console.log(error);

        });

      }, function(error){

        Notifier.error('Sorry, Your Job Posting failed. Please review the error and try again');
        console.log(error);

      });


     /* $scope.job = {};
      $scope.jobPostingForm.$setPristine();
      $scope.jobPostingForm.$setUntouched();
*/
      $location.path('/');
    };
  }]);
