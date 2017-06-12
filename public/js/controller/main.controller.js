(function(app){
    'use strict';
    app.controller('MainController',function($scope,$rootScope,$state,SessionStorage,movies){
        $rootScope.title = "express_movie_demo";
        $scope.movies = movies;

        $scope.updateMovie = function(movie){
            SessionStorage.delete('movie');
            $state.go('movie.update',{data:movie});
        };

        $scope.createMovie = function(){
            $state.go('movie.create');
        };
    });
})(angular.module('app'));