/**
 * Angular end-to-end mocks for backendless development
 */

angular.module('appDev', ['app', 'ngMockE2E'])
	.run(function($httpBackend) {
        
        var firstElements = [
            { id: 1, name: 'Element 1', description: 'This is an element 1' },
            { id: 2, name: 'Element 2', description: 'This is an element 2' },
            { id: 3, name: 'Element 3', description: 'This is an element 3' },
            { id: 4, name: 'Element 4', description: 'This is an element 4' }
        ];

        var secondElements = [
            { id: 1, title: 'second 1' },
            { id: 2, title: 'second 2' }
        ];

        $httpBackend.whenGET('/api/first').respond(firstElements);

        $httpBackend.whenPOST('/api/first').respond(function(method, url, data) {
            firstElements.push(angular.fromJson(data));
        });

        $httpBackend.whenGET('/api/second').respond(secondElements);
        $httpBackend.whenPOST('/api/second').respond(function(method, url, data) {
            secondElements.push(angular.fromJson(data));
        });
    });
