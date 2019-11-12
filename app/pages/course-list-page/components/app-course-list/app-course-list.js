function AppCourseList() {
    var $ctrl = this;

    $ctrl.onDelete = function(courseId) {
        $ctrl.onDeleteCourse({ courseId: courseId });
    };

    $ctrl.onEdit = function(courseId) {
        $ctrl.onEditCourse({ courseId: courseId });
    };

    $ctrl.handleLoadMore = function() {
        console.log('Load More Click');
    };
}

angular
    .module('myApp')
    .component('appCourseList', {
        templateUrl: 'app/pages/course-list-page/components/app-course-list/app-course-list.html',
        controller: AppCourseList,
        bindings: {
            courses: '<',
            onDeleteCourse: '&',
            onEditCourse: '&'
        }
    });
