function AppBreadcrumbs() {
  let $ctrl = this;
  $ctrl.title = 'FFFFFF';
}

angular
  .module('myApp')
  .component('appBreadcrumbs', {
    templateUrl: './app/components/app-home-page/components/app-breadcrumbs/app-breadcrumbs.html',
    controller: AppBreadcrumbs
  })