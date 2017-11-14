//use when want to clear all local store

var logOut = angular.module('LogOut', []);

logOut.controller('LogoutController',function($location, $scope, $window){
    $window.localStorage.clear();
    $location.path('/');
});