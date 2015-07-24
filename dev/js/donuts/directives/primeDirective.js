'user strict';

module.exports =  function(app){
  app.directive('primeDirective', function(){
    return {
      restrict: 'AC',
      template : '<h2>{{someVal}}</h2><input type="text" data-ng-model="someVal">'
    }
  })
};
