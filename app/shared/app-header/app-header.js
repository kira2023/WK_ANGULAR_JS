function AppHeader(authService, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.authState = authService.getAuthState();
    };

    $ctrl.onLogout = function() {
        authService.logout();
        $state.go('login');
    };
}

angular
    .module('myApp')
    .component('appHeader', {
        templateUrl: 'app/shared/app-header/app-header.html',
        controller: AppHeader
    });
