var app = angular.module("computer",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/main',{
      templateUrl: 'main.html',
      controller:'MainCtrl'
    }).
    otherwise({redirectTo:'/main'})
}])

.controller('MainCtrl', ['$scope', function($scope){
  $scope.person = 'James Wang';

  console.log($scope);
}]);

app.controller('TopCtrl', ['$scope', function($scope){
  $scope.person = 'John Doe';
}]);

