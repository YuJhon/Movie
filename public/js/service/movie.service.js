(function(app){
    'use strict';
    app.factory('MovieService',function($http,$q){
        return {
            getAllMovies: function(){
                var url = "http://localhost:3000/api/movie/list";
                var deferred = $q.defer();
                $http.get(url).then(
                    function success(respData){
                        var movies = respData.data;
                        deferred.resolve(movies);
                    },function error(reason){
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            },
            updateMovie: function(movie,id){
                var url = "http://localhost:3000/api/movie/"+id;
                var deferred = $q.defer();
                $http.put(url,movie).then(
                    function success(respData){
                        var movies = respData.data;
                        deferred.resolve(movies);
                    },function error(reason){
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            },
            createMovie : function(movie){
                var url = "http://localhost:3000/api/movie/create";
                var deferred = $q.defer();
                $http.post(url,movie).then(
                    function success(respData){
                        var movies = respData.data;
                        alert("Service Params:"+respData)
                        deferred.resolve(movies);
                    },function error(reason){
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            }
        };
    });
})(angular.module('app'));