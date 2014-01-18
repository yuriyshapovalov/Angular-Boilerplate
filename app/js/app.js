/**
 * Angular Boilerplate application bootstraper
 * 
 * @author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * @module app
 */
angular.module('app', ['app.controllers', 'ngRoute'])

.config(['$routeProvider',
    /**
     * Application frontend routing settings
     */
    function ($routeProvider) {

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
