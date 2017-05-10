<<<<<<< HEAD
app.controller('articleController',[ '$scope', 'articleService', 'authorizationService', 
 function ($scope, articleService, authorizationService) {
=======
app.controller('articleController', [ '$scope', 'articleService', 'authorizationService', 
function ($scope, articleService, authorizationService) {
>>>>>>> origin/master

    $scope.articleService = articleService;
    $scope.authorizationService = authorizationService;

    $scope.toggleEditArticle = function (article) {
        article.editArticle = !article.editArticle;
    }

    $scope.taggleShowComments = function (article) {
        article.showComments = !article.showComments;
    }

    $scope.toggleLeaveComment = function (article) {
        article.leaveComment = !article.leaveComment;
    }

    $scope.articleService.getArticles();

    $scope.getComments = function (article) {
        $scope.articleService.getComments(article);
    }

    $scope.createComment = function (article) {
        var comment = {
            poster: 1,
            article: article.id,
            body: article.newComment,
            title: article.newCommentTitle,
            datetime: new Date()
        }

        article.newComment = "";
        article.newCommentTitle = "";

        $scope.articleService.createComment(comment);
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

    $scope.deleteArticle = function (article) {
        var r = confirm("Do you want to delete your Article?");
        if (r == true) {
            $scope.articleService.deleteArticle(article);
        }
    }

    $scope.addArticle = function (newArticleTitle, newArticle) {

        var article = {
            poster: 1,
            body: newArticle,
            title: newArticleTitle,
            datetime: new Date
        }

        $scope.articleService.addArticle(article);
    }

    $scope.logout = function(){
        authorizationService.logout();
    }

}])