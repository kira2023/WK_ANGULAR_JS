function AppFooter() {
  let $ctrl = this;
}

angular
  .module('myApp')
  .component('appFooter', {
    templateUrl: './app/components/app-footer/app-footer.html',
    controller: AppFooter
  })