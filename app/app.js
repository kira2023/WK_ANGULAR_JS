var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $urlRouterProvider
        .when('/', function($state) {
            $state.go('home');
        })
        .otherwise('errorPage');

    $stateProvider
        .state({
            name: 'home',
            url: '/home',
            template: '<app-course-list-page></app-course-list-page>'
        });

    $stateProvider
        .state({
            name: 'edit',
            url: '/edit',
            template: '<app-edit-page></app-edit-page>'
        })
        .state({
            name: 'edit.course',
            url: '/:id',
            template: '<app-edit-page></app-edit-page>'
        });
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            template: '<app-login-page></app-login-page>'
        });
    $stateProvider
        .state({
            name: 'errorPage',
            url: '/errorPage',
            template: '<app-error-page></app-error-page>'
        });
});

app.run(function($transitions, authService, $state) {
    $transitions.onStart({}, function(transitions) {
        if (transitions.to().name !== 'login') {
            if (!authService.checkAuthentication()) {
                $state.go('login');

                return false;
            }
        }
    });
});
