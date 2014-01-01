'use strict'

var services = angular.module('app.services', []);

services.factory('someService', function () {

    var someData = 42;


    function someFunc() {
        return 'some Function has been called';
    }

    return {
        data: someData,
        veryCoolFunction: someFunc
    }
});

