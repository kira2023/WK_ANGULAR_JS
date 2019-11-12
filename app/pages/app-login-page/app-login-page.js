function AppLoginPage(authService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.userInfo = {
            email: '',
            password: ''
        };
        $ctrl.isLoginError = false;
    };

    $ctrl.onLogin = function() {
        $ctrl.isLoginError = !authService.login($ctrl.userInfo);
        if (!$ctrl.isLoginError) {
            location.replace(location.origin + '/home');
        }
    };
}

angular
    .module('myApp')
    .component('appLoginPage', {
        templateUrl: './app/pages/app-login-page/app-login-page.html',
        controller: AppLoginPage
    });
