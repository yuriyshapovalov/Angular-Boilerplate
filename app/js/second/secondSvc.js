/**
 * Second component service module
 * author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * module svc.second
 */

angular.module('svc.second', ['ngResource'])

    .factory('SecondSvc', [
        '$resource',
        function ($resource) {
            'use strict';

            return $resource('/api/second');
        }]);