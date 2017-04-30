app.controller('articleController', function($scope, articleService){

    $scope.articleService = articleService;

    $scope.articleService.getArticles();
})