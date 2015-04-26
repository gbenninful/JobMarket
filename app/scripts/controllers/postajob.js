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
      $scope.company = Models.CompanyInfo();
      $scope.address = Models.Address();
    }

   // init();


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
    $scope.previewJobPost = function(){


    };


      //Post Job Info, Company Info & Address Info to Azure when user clicks on Publish button
    $scope.jobPost = function (){

      $('#myModal').modal('hide');

      //Saving Job Information
      JobService.postAJob($scope.job).then( function(data){

        Notifier.success('Your Job Posting was successful');
        console.log(data);

      }, function(error){

        Notifier.error('Sorry, Your Job Posting failed. Please review the error and try again');
        console.log(error);

      } );


      //Saving Company Information
      JobService.saveCompanyInfo($scope.company).then( function(data){

          Notifier.success('You successfully saved your Company Info');
          console.log(data);
        },
        function(error){
          Notifier.error('Sorry, you could not successfully save your Company Info. Please try again');
          console.log(error);
        }
      );

      //Saving Address Information
      JobService.saveAddress($scope.address).then( function(data){

          console.log("About to Get All Jobs.");

          Notifier.success('You successfully saved the Company Address');
          console.log(data);

          //Calling the getAllJobs factory in JobServices
          JobService.getAllJobs().then(function(postedJobs){
           $scope.postedJobs = postedJobs;

            Notifier.success("Yay, I'm able to read all the posted jobs");
            console.table(postedJobs);
          }, function(error){

            console.log(error);
            console.log("Sorry we had an error retrieving your data");

          });


          //Calling the getAllJobs factory in JobServices
          /*JobService.getAllJobs(function(postedJobs){
           $scope.postedJobs = postedJobs;
           $scope.$apply();

           Notifier.success("Yay, I'm able to read all the posted jobs");
           console.log(postedJobs);
           }, function(error){

           console.log(error);
           console.log("Sorry we had an error retrieving your data");

           });*/
        },
        function(error){
          Notifier.error('Sorry, you could not successfully save the Company Address. Please try again');
          console.log(error);

        });


   /*   JobService.getAllJobs(function(postedJobs){

          console.log(postedJobs)
      }, function(error){

        console.log(error);
        console.lopg("Sorry we had an error retrieving your data");

      })*/;

      $scope.job = '';
      $scope.company = '';
      $scope.address = '';

      $scope.jobForm.$setPristine();

     // $location.path('/');
    };
  }]);
