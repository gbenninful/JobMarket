'use strict';

/**
 * @ngdoc function
 * @name jobMarketApp.controller:CompanyinfoCtrl
 * @description
 * # CompanyinfoCtrl
 * Controller of the jobMarketApp
 */

angular.module('jobMarketApp')
  .controller('CompanyInfoController', ['$scope','Models', 'Azure', 'JobService', '$location', 'Notifier', function ($scope, Models, Azure, JobService, $location, Notifier ) {

    //Binding the model object to the scope
    function init(){
      $scope.company = Models.CompanyInfo();
      $scope.address = Models.Address();
    }

    init();

    //Previewing Job posting in Modal
    $scope.previewCompanyInfo = function(){


    };


    //Post Job Info, Company Info & Address Info to Azure when user clicks on Publish button
    $scope.postCompanyInfo = function (){

     // $('#myModal').modal('hide');

      //Posting Company Info to Azure
      JobService.postCompanyInfo($scope.company).then( function(data){

          Notifier.success('You successfully saved your Company Info');
          console.log(data);
        },
        function(error){
          Notifier.error('Sorry, you could not successfully save your Company Info. Please try again');
          console.log('Company Info: ' + error);
        });

      //Posting Company Address Info to Azure
      JobService.postAddress($scope.address).then( function(data){

          Notifier.success('You successfully saved the Company Address');
          console.log('Company Address: ' + data);

        },
        function(error){
          Notifier.error('Sorry, you could not successfully save the Company Address. Please try again');
          console.log(error);

        });


      $scope.company = {};
      $scope.address = {};
      $scope.companyInfoForm.$setPristine();
      $scope.companyInfoForm.$setUntouched();

       $location.path('/postAJob');
    };
  }]);
