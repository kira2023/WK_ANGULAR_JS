function AppHomePage(courseService) {
  let $ctrl = this;

  $ctrl.$onInit = function() {
    $ctrl.courses = courseService.getData();
    $ctrl.isCreationMode = false;
  };
  
  $ctrl.handleDeleteCourse = function(courseId) {
    courseService.deleteDataById(courseId);
    $ctrl.courses = courseService.getData();
  }

  $ctrl.toggleCreationMode = function() {
    $ctrl.isCreationMode = !$ctrl.isCreationMode;
  }

  $ctrl.createCourse = function(course) {
    courseService.addData(course);
    $ctrl.toggleCreationMode();
  }

};

angular
  .module('myApp')
  .component('appHomePage', {
    templateUrl: './app/components/app-home-page/app-home-page.html',
    controller: AppHomePage
  })