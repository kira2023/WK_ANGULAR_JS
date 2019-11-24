function AppCourseSearch() {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.searchValue = '';
    };

    $ctrl.handleSearch = function() {
        $ctrl.onSearch({ searchValue: $ctrl.searchValue });
    };
}

angular
    .module('myApp')
    .component('appCourseSearch', {
        templateUrl: 'app/pages/app-course-list-page/components/app-course-search/app-course-search.html',
        controller: AppCourseSearch,
        bindings: {
            onSearch: '&'
        }
    });
