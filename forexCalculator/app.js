var pipCalculator = angular.module('pipCalculator', []);

pipCalculator.directive('pipCalculatorDir', [function(){
    return{
        restrict: 'C',
        scope: {
            title:  '=',
            },
        //template: '<h1>forexCalculator</h1>',
        templateUrl: 'forexCalculator/pipCalculator.html'
    };

}]);

pipCalculator.controller('pipCalculatorController',[ '$scope', '$http', function($scope, $http){
    //get sample json file
    $http.get('data/currency.json').then(function(response){
    $scope.currency = response.data;
    });
}]);
    
    
 