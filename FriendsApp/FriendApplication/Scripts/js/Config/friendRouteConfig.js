/// <reference path="" />
(function () {
	'use strict';

	angular
        .module('FriendApp')
        .config(function ($routeProvider) {
        	$routeProvider
			.when('/', {
				templateUrl: 'Partials/Friends',
				controller: 'HomeController'
			})
			.when('/user/:id', {
				templateUrl: '/Partials/User',
				controller: 'UserController'
			})
			.otherwise({
				redirectTo: '/'
			});
        });
})();