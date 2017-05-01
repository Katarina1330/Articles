app.service('articleService', function ($http) {

    var self = this;
    self.$http = $http;

    // Read all Articles
    self.getArticles = function () {
        var getArticlePath = "http://www.scripttic.com:8000/api/v1/article"
        $http.get(getArticlePath).then(function (response) {
            self.articles = response.data;
        }, function (error) {
            console.log(error);
        })
    }

    // Read all Comments
    self.getComments = function(article){
        var getCommentsPath = "http://www.scripttic.com:8000/api/v1/article/" + article.id + "/comment";
        $http.get(getCommentsPath).then(function(response){
            article.comments = response.data;
        }, function(error){
            console.log(error);
        })
    }

    // Create New Comment
    self.createComment = function(comment){
        var createCommentPath = "http://www.scripttic.com:8000/api/v1/article/" + comment.article + "/comment";
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + 'a89f338b-bed9-4716-9ccf-a6a1329b90df';
        $http.post(createCommentPath, comment).then(function(response){

        }, function(error){
            console.log(error);
        })
    }

    // Update Article
    self.editArticle = function (article) {
        var editArticlePath = "http://www.scripttic.com:8000/api/v1/article";
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + 'ecb75277-09d9-42e9-ba75-2458eb39b76e';
        $http.put(editArticlePath, article).then(function(response){

        }, function(error){
            console.log(error);
        })
    }

    // Delete Article
    self.deleteArticle = function(article){
        var deleteArticlePath = "http://www.scripttic.com:8000/api/v1/article/" + article.id;
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + 'b361221d-e1d7-447d-8233-198b22f95939';
        $http.delete(deleteArticlePath, article).then(function(response){

            var existingArticles = [];
            for(var i = 0; i < self.articles.length; i++){
                if(self.articles[i].id != article.id){
                    existingArticles.push(self.articles[i]);
                }
            }

            self.articles = existingArticles;
        }, function(error){
            console.log(error);
        })
    }


})