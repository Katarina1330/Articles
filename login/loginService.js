app.service('loginService', ['$http', '$httpParamSerializerJQLike', 'authorizationService', '$window',
    function ($http, $httpParamSerializerJQLike, authorizationService, $window) {

        var self = this;
        self.$http = $http;
        self.$httpParamSerializerJQLike = $httpParamSerializerJQLike;

        // Login User
        self.login = function (email, password) {

            var data = { 'email': email, 'password': password, 'grant_type': 'Bearer' };

            $http({
                url: 'http://www.scripttic.com:8000/oauth2/token',
                method: 'POST',
                data: $httpParamSerializerJQLike(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                // success
                var token = response.data;
                // console.log(response);

                // localStorage["userEmail"] = email;


                authorizationService.setToken(token);
                authorizationService.getUserDetails();
                $window.location.href = '#/article';
            },
                function (response) {
                    // failed
                    console.log(response);
                });
        }

        // self.getEmail = function () {
        //     return localStorage['userEmail'];
        // }

        


    }]) 