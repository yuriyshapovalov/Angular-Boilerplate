/**
 * Application controllers
 * @author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * @module app.controllers
 */
angular.module('app.controllers', ['app.services'])

    /**
     * Index page controller
     */
    .controller('IndexCtrl', [
        '$scope', 
        function ($scope) {
            'use strict';
            $scope.title = 'Home page';
        }])

    /**
     * First page controller
     */
    .controller('FirstCtrl', [
        '$scope', 
        'FirstSvc',
        function ($scope, FirstSvc) {
            'use strict';

            var firstList = FirstSvc.query();
            $scope.list = firstList;
            $scope.title = 'First page';
            $scope.content = "This is a content of first page";
        }])

    /**
     * Second page controller
     */
    .controller('SecondCtrl', [
        '$scope', 
        function ($scope) {
            'use strict';
            $scope.title = 'Second page';
            $scope.content = "This is a content of second page";
        }])

    /**
     * Third page controller
     */
    .controller('ThirdCtrl', [
        '$scope', 
        function ($scope) {
            'use strict';
            $scope.title = 'Third page';
            $scope.content = "This is a content of third page";
        }])

    /**
     * 404 Page Not Found controller
     */
    .controller('Error404Ctrl', [
        '$scope', 
        function ($scope) {
            'use strict';
            $scope.title = '404';
        }]);
