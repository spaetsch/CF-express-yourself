'use strict';

console.log("load controller.js");

//refactor
//eliminate $http and change dependency to resource


module.exports = function(app) {
  console.log("controller.js inside function");
  app.controller('appController', ['$scope', 'resource', function($scope, resource) {

    var Donut = resource('donuts'); //is this the filename or location??

    var getAll = function(){
      Donut.getAll(function(response){
        console.log("inside getall", response);
        $scope.donuts = response;
      });
    };
    getAll();

    $scope.submitForm = function(donut) {
      console.log(donut.day);
      Donut.submit(donut, function(response) {
        getAll();
      });
    };

    $scope.destroy = function(id) {
      console.log(id);
      Donut.destroy(id, function(response) {
        getAll();
      });
    };

    $scope.edit = function(donut) {
      donut.editing = false;
      console.log("i am editing this:", donut);
      console.log("donut._id", donut._id);
      // $http.put('/donuts/' + donut._id, donut).success(function(response){
      //   getAll();
      // });

      Donut.edit(donut, function(response){
        console.log("inside donut.put");
        getAll();
      });

    };

  }])};

