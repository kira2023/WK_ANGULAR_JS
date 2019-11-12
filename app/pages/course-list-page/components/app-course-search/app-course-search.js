function AppCourseSearch() {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.valueSearch = '';
    };

    $ctrl.handleSearch = function() {
        console.log($ctrl.valueSearch);
    };
}

angular
    .module('myApp')
    .component('appCourseSearch', {
        templateUrl: 'app/pages/course-list-page/components/app-course-search/app-course-search.html',
        controller: AppCourseSearch
    });
