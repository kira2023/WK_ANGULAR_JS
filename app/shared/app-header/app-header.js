function AppHeader(authService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.isAuthenticated = authService.isAuthenticated();
    };

    $ctrl.currentUser = authService.getCurrentUserInfo();

    $ctrl.onLogout = function() {
        authService.logout();
        location.replace(location.origin + '/login');
    };
}

angular
    .module('myApp')
    .component('appHeader', {
        templateUrl: 'app/shared/app-header/app-header.html',
        controller: AppHeader
    });
