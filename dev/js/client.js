'use strict';

console.log("load client.js");

require('angular/angular');

console.log("after ang require");

var donutApp = angular.module('donutApp', []);

// services
require('./services/resource-services')(donutApp);

console.log("after services require");

// controllers
require('./donuts/donuts')(donutApp);

// directives

