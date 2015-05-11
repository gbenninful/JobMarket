'use strict';

angular.module('jobMarketApp')
.factory('Models', function (){

    //USER
    var User = function(options){
     // options = options || {};
      this.firstName = options.firstName || '';
      this.lastName = options.lastName || '';
      this.email = options.email || '';
      this.password = options.password || '';
      this.passwordConfirmation = options.passwordConfirmation || '';
    };

    //JOB POSTING
    var JobPosting = function (options) {

      // options = options || {};
      this.jobTitle = options.jobTitle || '';
      this.jobCategory = options.jobCategory || '';
      this.jobDescription = options.jobDescription || '';
      this.companyName = options.companyName || '';
      this.hrEmail = options.hrEmail || '';
      this.city = options.city || '';
      this.state = options.state || '';
    };


    //COMPANY INFORMATION
    var CompanyInfo = function (options) {

     // options = options || {};
      this.companyName = options.companyName || '';
      this.companyEmail = options.companyEmail || '';
      this.companyPhone = options.companyPhone || '';
      this.companyUrl = options.companyUrl || '';
    };


    //ADDRESS
    var Address = function(options) {

      options = options || {};
      //this.companyId = options.companyId || '';
      this.street = options.street || '';
      this.city = options.city || '';
      this.state = options.state || '';
      this.zipCode = options.zipCode || '';
    };


    return {
      User: function () { return new User();},
      JobPosting: function (){ return new JobPosting();},
      CompanyInfo: function () { return new CompanyInfo();},
      Address: function () { return new Address();}
    };

  });
