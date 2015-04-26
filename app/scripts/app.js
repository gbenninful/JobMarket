'use strict';

/**
 * @ngdoc overview
 * @name jobMarketApp
 * @description
 * # jobMarketApp
 *
 * Main module of the application.
 */
angular
  .module('jobMarketApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'nOyNoCPJhqWihWDWZFRyvpdLHrjBtu61'; //Adding the application key
    $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      /*.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })*/
      .when('/postAJob', {
        templateUrl: 'views/postajob.html',
        controller: 'PostAJobController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
