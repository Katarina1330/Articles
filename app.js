var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'articleController',
        templateUrl: 'articles/article.html'
    })
    .when('/addArticle', {
        controller: 'articleController',
        templateUrl: 'articles/addArticle.html'
    })
    .when('/login',{
        controller: 'loginController',
        templateUrl: 'login/login.html'
    })
    .when('/registration',{
        controller: 'registrationController',
        templateUrl: 'registration/registration.html'
    })
    .otherwise({redirectTo: '/' });
})