angular
    .module('myApp')
    .factory('authService', function($rootScope, $timeout) {
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
        var authState = {
            isAuthenticated: false,
            currentUser: null
        };

        return {
            login: login,
            logout: logout,
            getAuthState: getAuthState,
            checkAuthentication: checkAuthentication
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
            authState.isAuthenticated = false;
            authState.currentUser = null;
        }

        function checkAuthentication() {
            var token = localStorage.getItem('token');

            if (token) {
                authState.currentUser = data.find(function(item) {
                    return item.token === token;
                });
            }
            authState.isAuthenticated = !!(authState.currentUser && token);

            return !!(authState.currentUser && token);
        }

        function getAuthState() {
            return authState;
        }
    });
