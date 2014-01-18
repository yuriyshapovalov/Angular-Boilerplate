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

            //return [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}];
            return $resource('/api/first');

        }]);
