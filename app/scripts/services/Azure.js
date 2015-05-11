'use strict';

angular.module('jobMarketApp')
.factory('Azure', ['$resource', function($resource){

    var APP_URL = 'https://jobmarket.azure-mobile.net/',
        APP_KEY = 'nOyNoCPJhqWihWDWZFRyvpdLHrjBtu61',
        client = new WindowsAzure.MobileServiceClient(APP_URL, APP_KEY);

        var Entity = function (tableName) {
          this.tableName = tableName;
        };

        Entity.prototype.getAzureTable = function () {

          return client.getTable(this.tableName);
        };

        Entity.prototype.getResource = function(){

          return $resource('https://jobmarket.azure-mobile.net/tables/' + this.tableName + '/:id', {id: '@id'}, { 'update': { method: 'PATCH', isArray: false } });

        };

        return {
                JobPosting: function(){ return new Entity('JobPostings'); },
                CompanyInfo: function() { return new Entity('CompanyInfo'); },
                Address: function(){ return new Entity('Address'); },
                User: function(){ return new Entity('Users');}
        };
      }]);
