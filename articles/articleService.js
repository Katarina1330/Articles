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