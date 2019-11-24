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

    $ctrl.onSearchCourse = function(searchValue) {
        $ctrl.courses = courseService.filterCoursesByName(searchValue);
    };
}

angular
    .module('myApp')
    .component('appCourseListPage', {
        templateUrl: 'app/pages/app-course-list-page/app-course-list-page.html',
        controller: AppHomePage
    });
