(function () {
    'use strict';

    angular
        .module('FriendApp')
        .controller('UserController', UserController);

    UserController.$inject = ['$routeParams', 'userDataService'];

    function UserController($routeParams, userDataService) {
    	var vm = this;
    	vm.data = userDataService.getUser($routeParams.id);
    }
})();
