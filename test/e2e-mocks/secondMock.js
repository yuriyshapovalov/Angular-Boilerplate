/**
 * Second component e2e mock
 */

angular.module('mock.second', [])
    .factory('SecondElementList', function(){
        return [
            { id: 1, product: 'Book 1', cost: 25,   description: 'Description of book 1' },
            { id: 2, product: 'Book 2', cost: 40,   description: 'Description of book 2' },
            { id: 3, product: 'Book 3', cost: 19.9, description: 'Description of book 3' },
            { id: 4, product: 'Book 4', cost: 90,   description: 'Description of book 4' }
        ];
    })