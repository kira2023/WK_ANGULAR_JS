function AppCourseItem() {
  let $ctrl = this;

  $ctrl.handleDelete = function() {
    $ctrl.onDelete({courseId: $ctrl.course.id})
  };
}

angular
  .module('myApp')
  .component('appCourseItem', {
    templateUrl: './app/components/app-home-page/components/app-course-list/app-course-item/app-course-item.html',
    controller: AppCourseItem,
    bindings: {
      course: '<',
      onDelete: '&',
    }
  })