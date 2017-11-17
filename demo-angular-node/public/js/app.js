var app = angular.module('myApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NewsCtrl', 'DetailCtrl', 'StoreCtrl']);


app.directive("navBar",function () {
    return{
        restric: "AEC",
        templateUrl : "views/navBar.html"
    }
});