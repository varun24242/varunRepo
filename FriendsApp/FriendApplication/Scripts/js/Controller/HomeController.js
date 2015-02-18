(function () {
    'use strict';

    angular
        .module('FriendApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['userDataService'];

    function HomeController(userDataService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Friends';
        vm.data = userDataService.getData();
        vm.removeRow = removeRow;

        activate();

        function activate() { }

        function removeRow(row) {
        	userDataService.removeData(vm.data.indexOf(row));
        	vm.data = userDataService.getData();
        }
    }
})();
