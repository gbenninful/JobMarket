'use strict';

angular.module('jobMarketApp')
.factory('Models', function (){

    //JOB POSTING
    var JobPosting = function (options) {

       options = options || {};
      this.companyId = options.companyId || '';
      this.jobTitle = options.jobTitle || '';
      this.category = options.category || '';
      this.description = options.description || '';
      this.hrEmail = options.hrEmail || '';
    };


    //COMPANY INFORMATION
    var CompanyInfo = function (options) {

      options = options || {};
      this.companyName = options.companyName || '';
      this.companyEmail = options.companyEmail || '';
      this.phone = options.phone || '';
      this.url = options.url || '';
    };


    //ADDRESS
    var Address = function(options) {

      options = options || {};
      this.companyId = options.companyId || '';
      this.street = options.street || '';
      this.city = options.city || '';
      this.state = options.state || '';
      this.zipCode = options.zipCode || '';
    };


    return {
      JobPosting: function (){ return new JobPosting();},
      CompanyInfo: function () { return new CompanyInfo();},
      Address: function () { return new Address();}
    };

  });
