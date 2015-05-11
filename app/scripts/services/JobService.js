/**
 * Created by George on 3/21/2015.
 */
'use strict';

angular.module('jobMarketApp')
  .factory('JobService', ['Azure', '$q', 'Models', 'Notifier', function(Azure, $q, Models, Notifier){

    function postAJob(obj){

      var deffered = $q.defer();

      Azure.JobPosting().getAzureTable().insert(obj).then( function(results){

          deffered.resolve(results);

        }, function (error) {

         deffered.reject(error);
        });

      return deffered.promise;
    }



    function postCompanyInfo (obj){

      var deffered = $q.defer();

      Azure.CompanyInfo().getAzureTable().insert(obj).then( function(results){

        deffered.resolve(results);

      }, function (error) {

        deffered.reject(error);
      });

      return deffered.promise;
    }



    function postAddress(obj){

      var deffered = $q.defer();

      Azure.Address().getResource().save(obj).$promise.then( function(results){

        deffered.resolve(results);

      },function (error){

        deffered.reject(error);
      });
        return deffered.promise;
    }


    function getAllJobs(){

      var deffered = $q.defer();
      Azure.JobPosting().getAzureTable().read().then(function(results){

          deffered.resolve(results);
        }, function(error){

          deffered.reject(error);
        });
          return deffered.promise;
    };


    return {
            postAJob: postAJob,
            postCompanyInfo: postCompanyInfo,
            postAddress: postAddress,
            getAllJobs: getAllJobs
    };

  }]);

