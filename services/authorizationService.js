app.service('authorizationService', function () {

    var self = this;
    self.isAuthorized = false;

    self.setToken = function (token) {
        localStorage["token"] = token;
<<<<<<< HEAD
=======
        // localStorage.token = "token";
>>>>>>> origin/master

        localStorage['token_time'] = new Date();
        self.isAuthorized = true;
    }

    self.getToken = function () {
        return localStorage['token'];
    }

<<<<<<< HEAD
=======

>>>>>>> origin/master
    self.isValid = function () {

        var token = localStorage['token'];
        var tokenTime = localStorage['token_time'];
        var convertedTime = new Date(tokenTime);

        var thirtyMinBefore = new Date();
        thirtyMinBefore.setMinutes(thirtyMinBefore.getMinutes() - 30);

        if (token != null && token != undefined && convertedTime > thirtyMinBefore) {

            self.isAuthorized = true;
        } else{
            self.logout();
        }
    }

    self.logout = function(){
        localStorage.token = "";
        localStorage.token_time = "";
        self.isAuthorized = false;
    }
    self.isValid();

}) 