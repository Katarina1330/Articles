app.service('articleService', ['$http', 'authorizationService', '$window',
    function($http, authorizationService, $window) {

        var self = this;
        self.$http = $http;

        // Read all Articles
        self.getArticles = function() {
            // var getArticlePath = "http://www.scripttic.com:8000/api/v1/article";
            var getArticlePath = "articleData/getArticles.json"
            return $http.get(getArticlePath).then(function(response) {
                // self.articles = response.data;
                return response.data;
            }, function(error) {
                console.log(error);
            })
        }

        // Read all Comments
        self.getComments = function(article) {
            var getCommentsPath = "articleData/comments_" + article.id + ".json";
            // var getCommentsPath = "http://www.scripttic.com:8000/api/v1/article/" + article.id + "/comment";
            $http.get(getCommentsPath).then(function(response) {
                article.comments = response.data;
            }, function(error) {
                console.log(error);
            })
        }

        // Create New Comment
        self.createComment = function(comment) {
            var createCommentPath = "http://www.scripttic.com:8000/api/v1/article/" + comment.article + "/comment";
            var token = authorizationService.getToken();
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            $http.post(createCommentPath, comment).then(function(response) {

            }, function(error) {
                console.log(error);
                alert("Service is not available.");
            })
        }

        // Update Article
        self.editArticle = function(article) {
            var editArticlePath = "http://www.scripttic.com:8000/api/v1/article";
            var token = authorizationService.getToken();
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            $http.put(editArticlePath, article).then(function(response) {
                return response.data.id;
            }, function(error) {
                console.log(error);
                alert("Service is not available.");
            })
        }

        // Delete Article
        self.deleteArticle = function(article) {
            var deleteArticlePath = "http://www.scripttic.com:8000/api/v1/article/" + article.id;
            var token = authorizationService.getToken();
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            $http.delete(deleteArticlePath, article).then(function(response) {

                $window.location.href = '#/article';
                // var existingArticles = [];
                // for(var i = 0; i < self.articles.length; i++){
                //     if(self.articles[i].id != article.id){
                //         existingArticles.push(self.articles[i]);
                //     }
                // }

                // self.articles = existingArticles;
            }, function(error) {
                console.log(error);
                // alert("Service is not available.");

            })
        }

        // Create New Article
        self.addArticle = function(article) {

            var addArticlePath = "http://www.scripttic.com:8000/api/v1/article";
            var token = authorizationService.getToken();
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            $http.post(addArticlePath, article).then(function(response) {
                window.location.href = '#/article';
                //window.history.back();
            }, function(error) {
                console.log(error);
                alert("Service is not available.");
            })
        }

    }
])