app.controller('articleController', ['$scope', 'articleService', 'authorizationService', '$timeout',
    function($scope, articleService, authorizationService, $timeout) {

        $scope.articleService = articleService;
        $scope.authorizationService = authorizationService;

        $scope.displayDeleteDialog = false;

        $scope.toggleEditArticle = function(article) {
            article.animateEditArticle = article.animateEditArticle === 'open' ? '' : 'open';
            article.editArticle = !article.editArticle;
        }

        $scope.toggleLeaveComment = function(article) {
            article.animateLeaveComment = article.animateLeaveComment === 'open' ? '' : 'open';
            article.leaveComment = !article.leaveComment;
        }

        $scope.taggleShowComments = function(article) {
            article.animateShowComments = article.animateShowComments === 'open' ? '' : 'open';
            article.showComments = !article.showComments;
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

            $scope.articleService.createComment(comment, null, function() {
                $scope.displayToast = $scope.displayToast === 'open' ? '' : 'open';
                $timeout(cancelTimeout, 7000);
            });
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

            $scope.articleService.editArticle(article, null, function() {
                $scope.displayToast = $scope.displayToast === 'open' ? '' : 'open';
                $timeout(cancelTimeout, 7000);
            });
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

                $scope.articleService.deleteArticle($scope.selectedArticle, null, function() {
                    $scope.displayToast = $scope.displayToast === 'open' ? '' : 'open';;
                    $timeout(cancelTimeout, 7000);
                });
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
            $scope.articleService.addArticle(article, null, function() {
                $scope.displayToast = $scope.displayToast === 'open' ? '' : 'open';
                $timeout(cancelTimeout, 7000);
            });
        }

        $scope.logout = function() {
            authorizationService.logout();
        }

        var cancelTimeout = function() {
            $scope.displayToast = '';
        }

        $scope.cancelToast = function() {
            $scope.displayToast = '';
        }


    }
])