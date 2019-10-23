function AppCourseSearch() {
  let $ctrl = this;
  $ctrl.title = 'FFFFFF';
}

angular
  .module('myApp')
  .component('appCourseSearch', {
    templateUrl: './app/components/app-home-page/components/app-course-search/app-course-search.html',
    controller: AppCourseSearch
  })