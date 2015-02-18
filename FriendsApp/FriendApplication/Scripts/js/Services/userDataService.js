(function () {
	'use strict';

	angular
        .module('FriendApp')
        .factory('userDataService', userDataService);

	function userDataService() {
		var data = [{
			id: 1,
			name: 'Varun',
			status: 'single',
			phone: '732-501-5525',
			bio: 'varun is a developer',
			address: 'main street',
			available: false
		},
			{
				id: 2,
				name: 'Sam',
				status: 'married',
				phone: '832-501-5525',
				bio: 'sam is a surfer',
				address: 'elm street',
				available: true
			},
			{
				id: 3,
				name: 'Tom',
				status: 'single',
				phone: '932-501-5525',
				bio: 'tom is a singer',
				address: 'commerce street',
				available: false
			},
		];

		var service = {
			getData: getData,
			removeData: removeData,
			getUser: getUser
		};

		return service;

		function getData() {
			return data;
		}

		function removeData(index) {
			data.splice(index, 1);
		}

		function getUser(id) {
			var user;
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == id) {
					user = data[i];
				}
			}

			return user;
		}
	}
})();