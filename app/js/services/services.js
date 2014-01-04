var services = angular.module('app.services', []);

services.factory('someService', function () {
    'use strict';

    var someData = 42;


    function someFunc() {
        return 'some Function has been called';
    }

    return {
        data: someData,
        veryCoolFunction: someFunc
    };
});
