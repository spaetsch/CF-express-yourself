'use strict';

console.log("load client.js");

require('angular/angular');
require('angular-route');
require('angular-animate');

var donutApp = angular.module('donutApp', ['ngRoute', "ngAnimate"]);

// services
require('./services/resource-services')(donutApp);

// controllers
require('./donuts/controllers/donut-controller')(donutApp);

// directives
require('./donuts/directives/primeDirective.js')(donutApp);
require('./donuts/directives/addDonutForm.js')(donutApp);

// routeProvider
donutApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './templates/donuts/home.html',
    controller: 'appController'
  })
  .when('/show-menu', {
    templateUrl: './templates/donuts/show-menu.html',
    controller: 'appController'
  })
  .when('/edit-menu', {
    templateUrl: './templates/donuts/edit-menu.html',
    controller: 'appController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);


