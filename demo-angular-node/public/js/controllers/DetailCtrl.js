angular.module('DetailCtrl', []).controller('DetailController', function($scope) {

	$scope.tagline = 'The square root of life is pi!';
    $scope.class = "love";
    $scope.class1 = "hate";
    $scope.changeClass = function(){

        if (($scope.class === "love") && ($scope.class1 = "hate") ) {
            $scope.class = "hate";
            $scope.class1 = "love";
        }
        else{
            $scope.class = "love";
            $scope.class1 = "hate";

        }
    };


});