angular.module('app', ['app.controllers', 'ngRoute'])
.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'index.tpl',
                controller: 'IndexCtrl'
            })
            .when('/first', {
                templateUrl: 'first.tpl',
                controller: 'FirstCtrl'
            })
            .when('/second', {
                templateUrl: 'second.tpl',
                controller: 'SecondCtrl'
            })
            .when('/third', {
                templateUrl: 'third.tpl',
                controller: 'ThirdCtrl'
            })
            .otherwise({
                templateUrl: 'notFound404.tpl',
                controller: 'Error404Ctrl'
            });
}]);
