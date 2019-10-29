angular.module('myApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state({
                name: 'home',
                url: '/home',
                template: '<app-home-page></app-home-page>'
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
