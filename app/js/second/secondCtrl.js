/**
 * Second component controllers module
 * @author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * @module ctrl.second
 */

angular.module('ctrl.second', ['svc.second'])

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
        }]);