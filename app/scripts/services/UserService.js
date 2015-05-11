/**
 * Created by George on 4/28/2015.
 */


'use strict';

angular.module('jobMarketApp')
  .factory('UserService', ['Azure', '$q', 'Models', 'Notifier', function(Azure, $q, Models, Notifier){


    function addUser(obj){

      var deffered = $q.defer();

      Azure.User().getAzureTable().insert(obj).then(function(results){

        deffered.resolve(results);

      }, function(error){

        deffered.reject(error);
      });

      return deffered.promise;
    }


    return {
      addUser: addUser
    };
  }]);
