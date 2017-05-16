app.service('authorizationService', function ($http) {

    var self = this;
    self.isAuthorized = false;

    self.setToken = function (token) {
        localStorage["token"] = token;

        localStorage['token_time'] = new Date();
        self.isAuthorized = true;
    }

    self.getToken = function () {
        return localStorage['token'];
    }

    self.isValid = function () {

        var token = localStorage['token'];
        var tokenTime = localStorage['token_time'];
        var convertedTime = new Date(tokenTime);

        var thirtyMinBefore = new Date();
        thirtyMinBefore.setMinutes(thirtyMinBefore.getMinutes() - 30);

        if (token != null && token != undefined && convertedTime > thirtyMinBefore) {

            self.isAuthorized = true;
        } else {
            self.logout();
        }
    }

    self.logout = function () {
        localStorage.token = "";
        localStorage.token_time = "";
        self.isAuthorized = false;
    }
    self.isValid();

    self.getUserDetails = function () {

        var token = self.getToken();
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        return $http.get("http://www.scripttic.com:8000/api/v1/user").then(function (response) {
            console.log(response);
            //return response.id;
            //self.userId = response.data.id;
            // var user = {
            //     id: response.data.id,
            //     email: response.data.email,
            //     firstName: response.data.firstName,
            //     lastName: response.data.lastName
            // }

            // var userId = user.id;
            // self.setUserId(userId);

            var userId = response.data.id;
            localStorage['userId'] = userId;

        }, function (error) {
            console.log(error);
        })
    }

    // self.setUserId = function (userId) {
    //     localStorage['userId'] = userId;
    // }

    self.getUserId = function () {
        return localStorage['userId'];
    }

}) 