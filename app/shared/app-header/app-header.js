function AppHeader(userService) {
    var $ctrl = this;

    $ctrl.activeUser = userService.getActiveUser();
}

angular
    .module('myApp')
    .component('appHeader', {
        templateUrl: 'app/shared/app-header/app-header.html',
        controller: AppHeader
    });
