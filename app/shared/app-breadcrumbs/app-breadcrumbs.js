function AppBreadcrumbs(authService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.isAuthenticated = authService.isAuthenticated();
    };
}

angular
    .module('myApp')
    .component('appBreadcrumbs', {
        templateUrl: 'app/shared/app-breadcrumbs/app-breadcrumbs.html',
        controller: AppBreadcrumbs
    });
