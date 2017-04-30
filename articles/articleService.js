app.service('articleService', function($http){

    var self = this;
    self.$http = $http;

// Read all Articles
self.getArticles = function(){
    $http.get("http://www.scripttic.com:8000/api/v1/article").then(function(response){
            self.articles = response.data;
    }, function(error){
        console.log(error);
    })
}

})