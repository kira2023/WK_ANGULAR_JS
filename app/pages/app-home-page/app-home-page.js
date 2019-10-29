function AppHomePage(courseService, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.courses = courseService.getData();
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
    .component('appHomePage', {
        templateUrl: './app/pages/app-home-page/app-home-page.html',
        controller: AppHomePage
    });
