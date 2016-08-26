'use strict';
/**
* Services that persists and retrieves TODOs from localStorage.
*/
angular.module('angular-app').factory('todoStorage', function(){


var STORAGE_ID='todos-angulars-requirejs';
return {
    get:function(){
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },
    put: function(todos){
        return localStorage.setItem(STORAGE_ID,JSON.stringify(todos));
    }

};
});

