function AppHeader() {
  let $ctrl = this;
}

angular
  .module('myApp')
  .component('appHeader', {
    templateUrl: './app/components/app-header/app-header.html',
    controller: AppHeader
  })