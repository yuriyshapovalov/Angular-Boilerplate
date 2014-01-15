angular.module('app.controllers', [])

.controller('IndexCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.title = 'Home page';
}])

.controller('FirstCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.title = 'First page';
    $scope.content = "This is a content of first page";
}])

.controller('SecondCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.title = 'Second page';
    $scope.content = "This is a content of second page";
}])

.controller('ThirdCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.title = 'Third page';
    $scope.content = "This is a content of third page";
}])

.controller('Error404Ctrl', ['$scope', function ($scope) {
    'use strict';
    $scope.title = '404';
}]);
