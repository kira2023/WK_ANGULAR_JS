angular
    .module('myApp')
    .factory('userService', function() {
        var activeUser = {
            id: 1,
            firstName: 'Karyna',
            lastName: 'Kutsya',
            email: 'kira@email.com'
        };

        return {
            getActiveUser: getActiveUser
        };

        function getActiveUser() {
            return activeUser;
        }
    });
