var myApp = angular.module('myApp', []);

  myApp.controller('MyController', function MyController($scope) {

        $scope.author = {
          'name'    : 'Jaclyn Ciringione',
          'title'   : 'Software Engineer',
          'company' : 'Learn.co'
        }

  });