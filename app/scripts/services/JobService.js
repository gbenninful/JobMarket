/**
 * Created by George on 3/21/2015.
 */
'use strict';

angular.module('jobMarketApp')
  .factory('JobService', ['Azure','Models','Notifier', function(Azure, Models, Notifier){

    function postAJob(data, success, error){

      Azure.JobPosting().getAzureTable().insert(data).done( function(pData){

        if(success){
          success(pData);
        }
        }, function (nData) {
          error(nData);
        }
      );

     /* Azure.JobPosting().resource().save(data, function(positiveData){

      if(success){
        success(positiveData);
      }
    }, function (negativeData) {
      error(negativeData);
    })
*/
  }


    return {
            postAJob: postAJob
    };

  }]);

