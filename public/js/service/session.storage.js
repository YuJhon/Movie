(function(app){
    'use strict';
    app.factory('SessionStorage',function($window){
        var store = $window.sessionStorage;
        return {
            save: function(key,value){
                value = angular.toJson(value);
                stroe.setItem(key,value);
            },
            get: function(key){
                var value = store.getItem(key);
                if(value){
                    value = angular.fromJson(value);
                }
                return value;
            },
            delete: function(key){
                store.removeItem(key);
            }
        };
    });
})(angular.module('app'));