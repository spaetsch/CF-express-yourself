'use strict';

module.exports =  function(app){
  app.directive('addDonutForm', function(){
  return {
      restrict: 'AC',
      templateUrl : '/template/donuts/directives/addDonutForm.html'
      //replace: true
    }
  })
};
