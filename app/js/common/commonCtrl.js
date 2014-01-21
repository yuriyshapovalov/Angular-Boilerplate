/**
 * Common controller module
 * author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * module ctrl.common
 */

angular.module('ctrl.common', [])

    /**
     * 404 Page Not Found controller
     */
    .controller('Error404Ctrl', [
        '$scope',
        function ($scope) {
            'use strict';
            $scope.title = '404';
        }]);
