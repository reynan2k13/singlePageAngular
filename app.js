var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .when('/productsMale', {
    templateUrl : 'pages/productsMale.html',
    controller  : 'ProductController'
  })

  .when('/productsMale2', {
    templateUrl : 'pages/productsMale2.html',
    controller  : 'ProductController'
  })

  .when('/productsMale3', {
    templateUrl : 'pages/productsMale3.html',
    controller  : 'ProductController'
  })

  .when('/productsFemale', {
    templateUrl : 'pages/productsFemale.html',
    controller  : 'ProductController'
  })

  .when('/productsChildren', {
    templateUrl : 'pages/productsChildren.html',
    controller  : 'ProductController'
  })

  .when('/contacts', {
    templateUrl : 'pages/contacts.html',
    controller  : 'ContactsController'
  })  

  .otherwise({redirectTo: '/'});
});


app.controller('HomeController', function($scope) {
  $scope.message = 'Home';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'About Company B';
});

app.controller('ProductController', function($scope) {
  $scope.male = 'Male shoes';
  $scope.female = 'Female shoes';
  $scope.children = 'Children shoes';
});

app.controller('ContactsController', function($scope) {
  $scope.message = 'Contact Us';
});