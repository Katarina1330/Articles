app.controller('loginController', function($scope, loginService){

    $scope.loginService = loginService;

    $scope.login = function(email, password){

        loginService.login(email, password);
    }
}) 