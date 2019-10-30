function AppBreadcrumbs() {
  let $ctrl = this;
}

angular
  .module('myApp')
  .component('appBreadcrumbs', {
    templateUrl: './app/components/app-home-page/components/app-breadcrumbs/app-breadcrumbs.html',
    controller: AppBreadcrumbs
  })
