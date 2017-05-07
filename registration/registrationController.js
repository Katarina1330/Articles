app.controller('registrationController', [ '$scope', 'registrationService',
 function ($scope, registrationService) {

    $scope.registrationService = registrationService;

    $scope.addRegistration = function (firstName, lastName, email, password) {

        var registration = {
            email: email,
            pass: password,
            firstName: firstName,
            lastName: lastName
        }
        
        registrationService.addRegistration(registration);
    }
    
}]) 