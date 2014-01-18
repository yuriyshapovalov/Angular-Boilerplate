/**
 * Application services
 * @author Yuriy Shapovalov (shapovalov.yuri@gmail.com)
 * @module app.services
 */
angular.module('app.services', ['ngResource'])

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

        }])

    .factory('SecondSvc', [
        '$resource',
        function ($resource) {
            'use strict';

            return $resource('/api/second');
        }]);
