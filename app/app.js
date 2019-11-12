var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state({
            name: 'home',
            url: '/home',
            template: '<course-list-page></course-list-page>'
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
});

app.run(function($transitions, authService) {
    $transitions.onStart({}, function(transitions) {
        if (transitions.to().name !== 'login') {
            if (!authService.isAuthenticated()) {
                location.replace(location.origin + '/login');

                return false;
            }
        }
    });
});
