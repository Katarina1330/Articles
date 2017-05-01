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


})