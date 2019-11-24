angular
    .module('myApp')
    .factory('authService', function() {
        var data = [
            {
                email: 'kira@email.com',
                password: 'qwerty',
                token: '6hf74ncg94ndffmg8dgdbf7dnfbg9dnfh'
            },
            {
                email: 'tolya@email.com',
                password: 'qwerty1',
                token: '6hf74ncg94ndffmg8dgdbf7dnf7f8f9fj'
            }
        ];
        var currentUser = null;

        return {
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            getCurrentUserInfo: getCurrentUserInfo
        };

        function login(userInfo) {
            var user = data.find(function(item) {
                return item.email === userInfo.email && item.password === userInfo.password;
            });

            if (user) {
                localStorage.setItem('token', user.token);
            }

            return !!user;
        }

        function logout() {
            localStorage.removeItem('token');
        }

        function isAuthenticated() {
            var token = localStorage.getItem('token');

            if (token) {
                currentUser = data.find(function(item) {
                    return item.token === token;
                });
            }

            return !!(currentUser && token);
        }

        function getCurrentUserInfo() {
            return currentUser || {};
        }
    });
