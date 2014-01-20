/**
 * First component service module
 * author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * module svc.first
 */

angular.module('svc.first', ['ngResource'])

    .factory('FirstSvc', [
        '$resource',
        function ($resource) {
            'use strict';

            return $resource('/api/first', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    transformResponse: function (data, headersGetter) {
                        return data;
                    }
                }
            });

        }]);