angular.module('miniRouting')
  .controller('ProductsController', ['$scope', '$routeParams', 'products', function($scope, $routeParams, products) {
    $scope.test = 'Products Controller';

    $scope.routeParam = $routeParams.id;

    $scope.products = products;
  }]);