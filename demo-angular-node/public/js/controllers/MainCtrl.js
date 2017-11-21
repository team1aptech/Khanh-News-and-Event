angular.module('MainCtrl', [])
    .controller('MainController', function($scope,$http) {
        $scope.proData = [];
        $http.get("data/data-product-home.json").then(function (response) {
            $scope.proData = response.data.productData;
        });

        $scope.offers = [];
        $http.get("data/offer.json").then(function(response){
                $scope.offers = response.data.offer;
        });

        $scope.newdata = [];
        $http.get("data/data-news-home.json").then(function(response){
            $scope.newdata = response.data.newsDataHome;
        });
});