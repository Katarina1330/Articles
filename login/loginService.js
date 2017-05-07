app.service('loginService', function($http, $httpParamSerializerJQLike){

    var self = this;
    self.$http = $http;
    self.$httpParamSerializerJQLike = $httpParamSerializerJQLike;

     // Login User
    self.login = function (email, password) {

            var data = {'email': email, 'password': password, 'grant_type': 'Bearer'};

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

                    window.history.back();
                    console.log(response);
                 },
                 function (response) {
                     // failed
                     console.log(response);
                 });
    }
}) 