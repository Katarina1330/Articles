app.service('registrationService', ['$http', '$window',
    function($http, $window) {

        var self = this;
        self.$http = $http;

        // Registration visitor to become User:
        self.addRegistration = function(registration, success, fail) {

            $http.post("http://www.scripttic.com:8000/api/v1/user", registration).then(function(response) {
                $window.location.href = '#/login';
            }, function(error) {
                console.log(error);

                if (fail) {
                    fail();
                }
            })
        }
    }
])