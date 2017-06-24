app.controller('registrationController', ['$scope', 'registrationService', '$timeout',
    function($scope, registrationService, $timeout) {

        $scope.registrationService = registrationService;

        $scope.addRegistration = function(firstName, lastName, email, password) {

            var registration = {
                email: email,
                pass: password,
                firstName: firstName,
                lastName: lastName
            }

            registrationService.addRegistration(registration, null, function() {
                $scope.displayToast = $scope.displayToast === 'open' ? '' : 'open';
                $timeout(cancelTimeout, 7000);
            });
        }

        var cancelTimeout = function() {
            $scope.displayToast = '';
        }

        // $scope.cancelToast = function() {
        //     $scope.displayToast = '';
        // }

    }
])