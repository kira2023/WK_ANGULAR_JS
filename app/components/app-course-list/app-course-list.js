function AppCourseList() {
    var $ctrl = this;

    $ctrl.onDelete = function(courseId) {
        $ctrl.onDeleteCourse({ courseId: courseId });
    };

    $ctrl.onEdit = function(courseId) {
        $ctrl.onEditCourse({ courseId: courseId });
    };
}

angular
    .module('myApp')
    .component('appCourseList', {
        templateUrl: './app/components/app-course-list/app-course-list.html',
        controller: AppCourseList,
        bindings: {
            courses: '<',
            onDeleteCourse: '&',
            onEditCourse: '&'
        }
    });
