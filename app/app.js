<<<<<<< HEAD
angular.module('app', [''])
    .config(['$routeProvider'], 
        function($routeProvider){
        
        }]);
=======
var app = angular.module('app', [])

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'index.tpl',
				controller: 'IndexCtrl'})
			.when('/contacts', {
				templateUrl: 'contacts.tpl',
				controller: 'ContactsCtrl'})
			.otherwise({
				templateUrl: 'notFound404.tpl',
				controller: 'Error404Ctrl'})
	}]);
>>>>>>> 4348ea4eeb82d8db9a8ecbe83c2fea5b5eb32d06
