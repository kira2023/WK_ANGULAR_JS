angular
    .module('myApp')
    .factory('breadcrumbsService', function($rootScope) {
        var initBreadcrumbsState = generateBreadcrumbsConfig('Courses', 'home');
        var breadcrumbsList = [initBreadcrumbsState];

        return {
            getBreadcrumbsList: getBreadcrumbsList,
            setBreadcrumbsItem: setBreadcrumbsItem,
            removeBreadcrumbsItem: removeBreadcrumbsItem,
            generateBreadcrumbsConfig: generateBreadcrumbsConfig
        };

        function getBreadcrumbsList() {
            return breadcrumbsList;
        }

        function setBreadcrumbsItem(breadcrumb) {
            breadcrumbsList.push(breadcrumb);
            $rootScope.$emit('breadcrumbsChange');
        }

        function removeBreadcrumbsItem(breadcrumb) {
            breadcrumbsList = breadcrumbsList.filter(function(item) {
                return item.title !== breadcrumb.title;
            });
            $rootScope.$emit('breadcrumbsChange');
        }

        function generateBreadcrumbsConfig(title, route) {
            return {
                title: title,
                route: route
            };
        }
    });
