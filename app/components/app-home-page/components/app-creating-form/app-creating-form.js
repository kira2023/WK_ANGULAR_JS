function AppCreatingForm() {
  let $ctrl = this;

  $ctrl.newCourse = {
    title: '',
    time: 0,
    note: '',
  }
};

angular
  .module('myApp')
  .component('appCreatingForm', {
    templateUrl: './app/components/app-home-page/components/app-creating-form/app-creating-form.html',
    controller: AppCreatingForm,
    bindings: {
      cancelCreation: '&',
      createCourse: '&',
    }
  })