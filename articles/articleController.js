app.controller('articleController', function ($scope, articleService) {

    $scope.articleService = articleService;

    $scope.articleService.getArticles();

    $scope.toggleEditArticle = function (article) {
        article.editArticle = !article.editArticle;
    }

    $scope.editArticle = function (article) {
        var article = {
            id: article.id,
            poster: 1,
            body: article.body,
            title: article.title,
            datetime: new Date()
        }

        $scope.articleService.editArticle(article);
    }

})