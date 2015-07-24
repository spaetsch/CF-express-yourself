'use strict';

module.exports =  function(app){
  app.directive('newDirective', function(){
  return {
      restrict: 'AC',
      templateUrl : '/template/donuts/directives/newDirective.html'
      //replace: true
    }
  })
};
