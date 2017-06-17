app.controller('articleController', ['$scope', 'articleService', 'authorizationService',
    function($scope, articleService, authorizationService) {

        $scope.articleService = articleService;
        $scope.authorizationService = authorizationService;

        $scope.displayDeleteDialog = false;

        $scope.toggleEditArticle = function(article) {
            article.editArticle = !article.editArticle;
        }

        $scope.taggleShowComments = function(article) {
            article.showComments = !article.showComments;
        }

        $scope.toggleLeaveComment = function(article) {
            article.animateLeaveComment = article.animateLeaveComment === 'open' ? '' : 'open';
            article.leaveComment = !article.leaveComment;
        }




        // $scope.articleService.getArticles();

        $scope.articles = {};
        articleService.getArticles().then(function(data) {
            $scope.articles = data;
        })

        $scope.getComments = function(article, comments) {
            $scope.articleService.getComments(article);
        }

        $scope.createComment = function(article) {

            var userId = authorizationService.getUserId();
            var comment = {
                poster: userId,
                article: article.id,
                body: article.newComment,
                title: article.newCommentTitle,
                datetime: new Date()
            }

            article.newComment = "";
            article.newCommentTitle = "";

            $scope.articleService.createComment(comment);
        }

        $scope.editArticle = function(article) {
            var userId = authorizationService.getUserId();
            var article = {
                id: article.id,
                poster: userId,
                body: article.body,
                title: article.title,
                datetime: new Date()
            }

            $scope.articleService.editArticle(article);
        }

        $scope.openDeleteDialog = function(article) {
            $scope.displayDeleteDialog = true;
            $scope.selectedArticle = article;
        }

        $scope.cancelArticle = function() {
            $scope.displayDeleteDialog = false;
            $scope.selectedArticle = null;
        }

        $scope.deleteArticle = function() {
            // var r = confirm("Do you want to delete your Article?");

            if ($scope.displayDeleteDialog == true) {
                $scope.articleService.deleteArticle($scope.selectedArticle);
            }
            $scope.displayDeleteDialog = false;
            $scope.selectedArticle = null;
        }

        $scope.addArticle = function(newArticleTitle, newArticle) {
            var userId = authorizationService.getUserId();
            var article = {
                poster: userId,
                body: newArticle,
                title: newArticleTitle,
                datetime: new Date
            }
            $scope.articleService.addArticle(article);
        }

        $scope.logout = function() {
            authorizationService.logout();
        }

    }
])