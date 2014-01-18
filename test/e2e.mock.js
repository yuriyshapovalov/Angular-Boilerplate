/**
 * Angular end-to-end mocks for backendless development
 */

angular.module('appDev', ['app', 'ngMockE2E', 'mock.first', 'mock.second'])
    .run(function ($httpBackend, FirstElementList, SecondElementList) {

        var firstMockObject = FirstElementList;
        var secondMockObject = SecondElementList;

        $httpBackend.whenGET('/api/first').respond(200, firstMockObject);

        $httpBackend.whenPOST('/api/first').respond(function (method, url, data) {
            firstMockObject.push(angular.fromJson(data));
        });

        $httpBackend.whenGET('/api/second').respond(200, secondMockObject);

        $httpBackend.whenPOST('/api/second').respond(function (method, url, data) {
            secondMockObject.push(angular.fromJson(data));
        });
    });
