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
