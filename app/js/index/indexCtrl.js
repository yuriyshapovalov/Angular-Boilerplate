/**
 * Index component controller module
 * author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * module ctrl.index
 */

angular.module('ctrl.index', [])

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
            $scope.content = 'Boilerplate application for Single Page Application quick start';
        }])