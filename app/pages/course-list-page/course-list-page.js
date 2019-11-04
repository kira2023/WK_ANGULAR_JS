function AppHomePage(courseService, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.courses = courseService.getData();
        console.log('onInit');
    };

    $ctrl.$onChanges = function() {
        console.log('onChanges');
    };

    $ctrl.$doCheck = function() {
        console.log('doCheck');
    };

    $ctrl.$onDestroy = function() {
        console.log('onDestroy');
    };

    $ctrl.handleDeleteCourse = function(courseId) {
        courseService.deleteDataById(courseId);
        $ctrl.courses = courseService.getData();
    };

    $ctrl.onEditCourse = function(courseId) {
        $state.go('edit.course', { id: courseId });
    };
}

angular
    .module('myApp')
    .component('courseListPage', {
        templateUrl: 'app/pages/course-list-page/course-list-page.html',
        controller: AppHomePage
    });
