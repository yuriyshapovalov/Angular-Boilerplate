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
