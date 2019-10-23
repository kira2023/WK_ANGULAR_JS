function AppHomePage(courseService) {
  let $ctrl = this;

  $ctrl.$onInit = function() {
    $ctrl.courses = courseService.getData();
  };
  
  $ctrl.handleDeleteCourse = function(courseId) {
    courseService.deleteDataById(courseId);
    $ctrl.courses = courseService.getData();
  }
};

angular
  .module('myApp')
  .component('appHomePage', {
    templateUrl: './app/components/app-home-page/app-home-page.html',
    controller: AppHomePage
  })