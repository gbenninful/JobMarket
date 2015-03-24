'use strict';

angular.module('jobMarketApp')
.factory('Azure', ['$resource', function($resource){

    var client = new WindowsAzure.MobileServiceClient('https://jobmarket.azure-mobile.net/', 'nOyNoCPJhqWihWDWZFRyvpdLHrjBtu61');

        var Entity = function (tableName) {
          this.tableName = tableName;
        };

        Entity.prototype.getAzureTable = function () {

          return client.getTable(this.tableName);
        };

        Entity.prototype.getResource = function(){

          return $resource('https://jobmarket.azure-mobile.net/tables/' + this.tableName + '/:id', {id: '@id'}, { 'update': { method: 'PATCH', isArray: false} });
        };

        return {
                JobPosting: function (){ return new Entity('JobPostings'); },
                CompanyInfo: function () { return new Entity('CompanyInfo'); },
                Address: function () { return new Entity('Address'); }
        };
      }]);
