/**
 * Angular end-to-end mocks for backendless development
 */

angular.module('appDev', ['app', 'ngMockE2E', 'mock.first'])
	.run(function($httpBackend) {
        
        var secondElements = [
            { id: 1, title: 'second 1' },
            { id: 2, title: 'second 2' }
        ];

        var firstElements = $injector.get('FirstElementList');

        $httpBackend.whenGET('/api/first').respond(firstElements);

        $httpBackend.whenPOST('/api/first').respond(function(method, url, data) {
            firstElements.push(angular.fromJson(data));
        });

        $httpBackend.whenGET('/api/second').respond(secondElements);
        $httpBackend.whenPOST('/api/second').respond(function(method, url, data) {
            secondElements.push(angular.fromJson(data));
        });
    });
