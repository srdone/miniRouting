var app = angular.module('miniRouting', ['ngRoute']);

app.controller('MainController', ['$scope', function ($scope) {
  $scope.test = "Hi There";
}]);