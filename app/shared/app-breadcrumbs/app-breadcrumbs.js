function AppBreadcrumbs() {}

angular
    .module('myApp')
    .component('appBreadcrumbs', {
        templateUrl: 'app/shared/app-breadcrumbs/app-breadcrumbs.html',
        controller: AppBreadcrumbs
    });
