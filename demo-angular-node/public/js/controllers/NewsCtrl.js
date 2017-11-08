angular.module('NewsCtrl', [])
	.controller('NewsController', function($scope, $http) {
            $scope.myData = [];
            $http.get("/data/data-news.json").then(function (response) {
                $scope.myData = response.data.dataNew;
            });

            $scope.harleys = [];
            $http.get("data/harleydavidsondata.json").then(function (response) {
                $scope.harleys = response.data.harley;
            });

            $scope.hondaes = [];
            $http.get("data/hondadata.json").then(function (response) {
                $scope.hondaes = response.data.honda;
            });

            $scope.kawasakies = [];
            $http.get("data/kawasakidata.json").then(function (response) {
                $scope.kawasakies = response.data.kawasaki;
            });

            $scope.suzukies = [];
            $http.get("data/suzukidata.json").then(function (response) {
                $scope.suzukies = response.data.suzuki;
            });

            $scope.yamahaes = [];
            $http.get("data/yamahadata.json").then(function (response) {
                $scope.yamahaes = response.data.yamaha;
            });


    });