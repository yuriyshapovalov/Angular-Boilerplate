/**
 * First component controllers module
 * @author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * @module ctrl.first
 */

angular.module('ctrl.first', ['svc.first'])

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
        }]);