function AppCourseList() {
  let $ctrl = this;

  $ctrl.handleDelete = function(courseId) {
    $ctrl.onDeleteCourse({courseId: courseId});
  }
}

angular
  .module('myApp')
  .component('appCourseList', {
    templateUrl: './app/components/app-home-page/components/app-course-list/app-course-list.html',
    controller: AppCourseList,
    bindings: {
      courses: '<',
      onDeleteCourse: '&',
    }
  })