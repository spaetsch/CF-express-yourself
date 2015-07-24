'use strict';

console.log("load client.js");

require('angular/angular');
require('angular-route');

var donutApp = angular.module('donutApp', ['ngRoute']);

// services
require('./services/resource-services')(donutApp);

// controllers
require('./donuts/controllers/donut-controller')(donutApp);

// directives
require('./donuts/directives/primeDirective.js')(donutApp);
require('./donuts/directives/addDonutForm.js')(donutApp);


// donutApp.config([$routeProvider], function($routeProvider){
//   $routeProvider
//   .when('/donuts', {
//     templateUrl: '' ,  //moved main tag into another html file, insert
//     controller: appController
//   })
// });
