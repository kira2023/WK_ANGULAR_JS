angular.module('myApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
    });
