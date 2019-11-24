function AppEditPage(courseService, $state, breadcrumbsService) {
    var $ctrl = this;
    var breadcrumbsConfigEdit;

    $ctrl.$onInit = function() {
        $ctrl.course = courseService.getCourseById(+$state.params.id);
        var editRoute = $ctrl.course && 'edit.course({ id: '+ $ctrl.course.id +'})';
        breadcrumbsConfigEdit = $ctrl.course
            ? breadcrumbsService.generateBreadcrumbsConfig($ctrl.course.title, editRoute)
            : breadcrumbsService.generateBreadcrumbsConfig('Edit', 'edit');

        breadcrumbsService.setBreadcrumbsItem(breadcrumbsConfigEdit);
    };

    $ctrl.$onDestroy = function() {
        breadcrumbsService.removeBreadcrumbsItem(breadcrumbsConfigEdit);
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
