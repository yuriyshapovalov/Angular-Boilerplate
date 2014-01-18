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
        'FirstSvc',
        'SecondSvc',
        function ($scope, FirstSvc, SecondSvc) {
            'use strict';

            $scope.firstList = [];
            $scope.secondList = [];

            $scope.firstList = FirstSvc.query();
            $scope.secondList = SecondSvc.query();

            $scope.firstGridOptions = {
                data: 'firstList',
                columnDefs: [
                    { field: 'id', displayName: 'ID' },
                    { field: 'name', displayName: 'Name' },
                    { field: 'description', displayName: 'Description' },
                ]
            };

            $scope.secondGridOptions = {
                data: 'secondList',
                columnDefs: [
                    { field: 'id', displayName: 'ID' },
                    { field: 'product', displayName: 'Product' },
                    { field: 'cost', displayName: 'Cost' },
                    { field: 'description', displayName: 'Description' }
                ]
            };

            $scope.title = 'Start page';
            $scope.content = 'Boilerplate application for Single Page Application quick start'
        }])

    /**
     * First page controller
     */
    .controller('FirstCtrl', [
        '$scope', 
        'FirstSvc',
        function ($scope, FirstSvc) {
            'use strict';

            $scope.list = [];
            $scope.list = FirstSvc.query();

            $scope.firstGridOptions = {
                data: 'list',
                columnDefs: [
                    { field: 'id', displayName: 'ID' },
                    { field: 'name', displayName: 'Name' },
                    { field: 'description', displayName: 'Description' },
                ]
            };

            $scope.title = 'First page';
            $scope.content = "";
        }])

    /**
     * Second page controller
     */
    .controller('SecondCtrl', [
        '$scope',
        'SecondSvc',
        function ($scope, SecondSvc) {
            'use strict';

            $scope.list = [];
            $scope.list = SecondSvc.query();

            $scope.secondGridOptions = {
                data: 'list',
                columnDefs: [
                    { field: 'id', displayName: 'ID' },
                    { field: 'product', displayName: 'Product' },
                    { field: 'cost', displayName: 'Cost' },
                    { field: 'description', displayName: 'Description' }
                ]
            };

            $scope.title = 'Second page';
            $scope.content = "";
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
