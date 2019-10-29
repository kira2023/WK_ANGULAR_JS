function AppEditPage(courseService, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.course = courseService.getCourseById(+$state.params.id);
        console.log($ctrl.course);
    };

    $ctrl.goToHomePage = function() {
        $state.go('home');
    };

    $ctrl.saveCourse = function(course) {
        if ($ctrl.course) {
            courseService.updateData(course);
        } else {
            courseService.addData(course);
        }
        $ctrl.goToHomePage();
    };
}

angular
    .module('myApp')
    .component('appEditPage', {
        templateUrl: './app/pages/app-edit-page/app-edit-page.html',
        controller: AppEditPage
    });
