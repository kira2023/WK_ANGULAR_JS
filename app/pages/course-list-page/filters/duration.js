angular
    .module('myApp')
    .filter('formatDuration', function() {
        return function(duration) {
            var hours = Math.floor(duration / 60);
            var minutes = duration % 60;
            var hoursStr = hours ? hours + 'h ' : '';
            var minutesStr = minutes ? minutes + 'min' : '';

            return hoursStr + minutesStr;
        };
    });
