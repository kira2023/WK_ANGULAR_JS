function AppFooter(courseService) {
  let $ctrl = this;
  $ctrl.title = courseService.getData();
}

angular
  .module('myApp')
  .component('appFooter', {
    templateUrl: './app/components/app-footer/app-footer.html',
    controller: AppFooter
  })