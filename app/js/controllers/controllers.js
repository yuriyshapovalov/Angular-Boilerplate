'use strict'

var ctrl = angular.module('app.controllers', [])

ctrl.controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.title = 'Home page';
}]);

ctrl.controller('FirstCtrl', ['$scope', function ($scope) {
    $scope.title = 'First page';
    $scope.content = "This is a content of first page";
}]);

ctrl.controller('SecondCtrl', ['$scope', function ($scope) {
    $scope.title = 'Second page';
    $scope.content = "This is a content of second page";
}]);

ctrl.controller('ThirdCtrl', ['$scope', function ($scope) {
    $scope.title = 'Third page';
    $scope.content = "This is a content of third page";
}]);

ctrl.controller('Error404Ctrl', ['$scope', function ($scope) {
    $scope.title = '404';
}]);