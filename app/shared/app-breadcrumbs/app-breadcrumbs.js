function AppBreadcrumbs(authService, breadcrumbsService, $rootScope) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.authState = authService.getAuthState();
        $ctrl.breadcrumbsList = breadcrumbsService.getBreadcrumbsList();

        $rootScope.$on('breadcrumbsChange', function() {
            $ctrl.breadcrumbsList = breadcrumbsService.getBreadcrumbsList();
        });
    };
}

angular
    .module('myApp')
    .component('appBreadcrumbs', {
        templateUrl: 'app/shared/app-breadcrumbs/app-breadcrumbs.html',
        controller: AppBreadcrumbs
    });
