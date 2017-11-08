angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider


		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/news', {
			templateUrl: 'views/news.html',
			controller: 'NewsController'
		})
        .when('/news/single-page-news-01', {
            templateUrl: 'views/single-page-news-01.html',
            controller: 'DetailController'
        })
        .when('/harley', {
            templateUrl: 'views/offer-harley.html',
            controller: 'NewsController'
        })
        .when('/honda', {
            templateUrl: 'views/offer-honda.html',
            controller: 'NewsController'
        })
        .when('/kawasaki', {
            templateUrl: 'views/offer-kawasaki.html',
            controller: 'NewsController'
        })
        .when('/suzuki', {
            templateUrl: 'views/offer-suzuki.html',
            controller: 'NewsController'
        })
        .when('/yamaha', {
            templateUrl: 'views/offer-yamaha.html',
            controller: 'NewsController'
        })
		.when('/offers', {
			templateUrl: 'views/offer.html',
			controller: 'DetailController'
		})
		.when('/offers/bmw-01', {
        	templateUrl: 'views/bmw-01.html',
        	controller: 'DetailController'
    	});


	$locationProvider.html5Mode(true);

}]);