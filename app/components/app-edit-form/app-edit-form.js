function AppEditForm() {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.editableCourse = $ctrl.course
        ||{
            title: '',
            time: 0,
            note: ''
        };
    };
}

angular
    .module('myApp')
    .component('appEditForm', {
        templateUrl: './app/components/app-edit-form/app-edit-form.html',
        controller: AppEditForm,
        bindings: {
            course: '<',
            cancelCreation: '&',
            saveCourse: '&'
        }
    });
