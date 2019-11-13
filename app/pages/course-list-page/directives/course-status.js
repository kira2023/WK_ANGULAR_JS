angular
    .module('myApp')
    .directive('courseStatus', function() {
        return {
            scope: {
                courseStatusDate: '='
            },
            link: function($scope, element) {
                var courseDate = moment($scope.courseStatusDate);
                var currentDate = moment();
                var actualCourseDeadline = moment().subtract(15, 'day');

                if (courseDate.isBetween(actualCourseDeadline, currentDate, 'day')) {
                    element.addClass('actual-course');
                }
                if (courseDate.isSame(currentDate, 'day')) {
                    element.addClass('new-course');
                }
            }
        };
    });
