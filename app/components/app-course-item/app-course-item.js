function AppCourseItem() {
    var $ctrl = this;

    $ctrl.handleDelete = function() {
        $ctrl.onDelete({ courseId: $ctrl.course.id });
    };

    $ctrl.handleEdit = function() {
        $ctrl.onEdit({ courseId: $ctrl.course.id });
    };
}

angular
    .module('myApp')
    .component('appCourseItem', {
        templateUrl: './app/components/app-course-item/app-course-item.html',
        controller: AppCourseItem,
        bindings: {
            course: '<',
            onDelete: '&',
            onEdit: '&'
        }
    });
