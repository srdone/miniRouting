var app = angular.module('miniRouting', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'js/home/home-template.html',
      controller: 'HomeController'
    })
    .when('/products/:id', {
      templateUrl: 'js/products/products-template.html',
      controller: 'ProductsController',
      resolve: {
        products: function ($route, productService) {
          return productService.getProductsById($route.current.params.id)
        }
      }
    })
    .when('/settings', {
      templateUrl: 'js/settings/settings-template.html',
      controller: 'SettingsController'
    })
    .otherwise({
      redirectTo: '/'
    });

}]);