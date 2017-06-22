app.controller('loginController', ['$scope', 'loginService', '$timeout',
    function($scope, loginService, $timeout) {

        $scope.loginService = loginService;

        $scope.login = function(email, password) {

            loginService.login(email, password, null, function() {
                $scope.displayToast = $scope.displayToast === 'open' ? '' : 'open';
                $timeout(cancelTimeout, 7000);
            });
        }

        var cancelTimeout = function() {
            $scope.displayToast = '';
        }

        $scope.cancelToast = function() {
            $scope.displayToast = '';
        }


    }
])