/**
 * First component e2e mock
 */

angular.module('mock.first', [])
    .factory('FirstElementList', function(){
        return [
            { id: 1, name: 'Element 1', description: 'This is an element 1' },
            { id: 2, name: 'Element 2', description: 'This is an element 2' },
            { id: 3, name: 'Element 3', description: 'This is an element 3' },
            { id: 4, name: 'Element 4', description: 'This is an element 4' }
        ];
    })
