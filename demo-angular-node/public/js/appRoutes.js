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
        .when('/bmw', {
            templateUrl: 'views/offer-bmw.html',
            controller: 'NewsController'
        })
		// .when('/offers', {
		// 	templateUrl: 'views/offer.html',
		// 	controller: 'DetailController'
		// })
		.when('/offers/bmw-01', {
        	templateUrl: 'views/bmw/bmw-01.html',
        	controller: 'storeController'
    	})
        .when('/offers/bmw-02', {
            templateUrl: 'views/bmw/bmw-02.html',
            controller: 'storeController'
        })
        .when('/offers/bmw-03', {
            templateUrl: 'views/bmw/bmw-03.html',
            controller: 'storeController'
        })
        .when('/offers/bmw-04', {
            templateUrl: 'views/bmw/bmw-04.html',
            controller: 'storeController'
        })
        .when('/offers/bmw-05', {
            templateUrl: 'views/bmw/bmw-05.html',
            controller: 'storeController'
        })
        .when('/offers/yamaha-01', {
            templateUrl: 'views/yamaha/yamaha-01.html',
            controller: 'storeController'
        })
        .when('/offers/yamaha-02', {
            templateUrl: 'views/yamaha/yamaha-02.html',
            controller: 'storeController'
        })
        .when('/offers/yamaha-03', {
            templateUrl: 'views/yamaha/yamaha-03.html',
            controller: 'storeController'
        })
        .when('/offers/yamaha-04', {
            templateUrl: 'views/yamaha/yamaha-04.html',
            controller: 'storeController'
        })
        .when('/offers/yamaha-05', {
            templateUrl: 'views/yamaha/yamaha-05.html',
            controller: 'storeController'
        })
        .when('/offers/honda-01', {
            templateUrl: 'views/honda/honda-01.html',
            controller: 'storeController'
        })
        .when('/offers/honda-02', {
            templateUrl: 'views/honda/honda-02.html',
            controller: 'storeController'
        })
        .when('/offers/honda-03', {
            templateUrl: 'views/honda/honda-03.html',
            controller: 'storeController'
        })
        .when('/offers/honda-04', {
            templateUrl: 'views/honda/honda-04.html',
            controller: 'storeController'
        })
        .when('/offers/honda-05', {
            templateUrl: 'views/honda/honda-05.html',
            controller: 'storeController'
        })
        .when('/offers/kawasaki-01', {
            templateUrl: 'views/kawasaki/kawasaki-01.html',
            controller: 'storeController'
        })
        .when('/offers/kawasaki-02', {
            templateUrl: 'views/kawasaki/kawasaki-02.html',
            controller: 'storeController'
        })
        .when('/offers/kawasaki-03', {
            templateUrl: 'views/kawasaki/kawasaki-03.html',
            controller: 'storeController'
        })
        .when('/offers/kawasaki-04', {
            templateUrl: 'views/kawasaki/kawasaki-04.html',
            controller: 'storeController'
        })
        .when('/offers/kawasaki-05', {
            templateUrl: 'views/kawasaki/kawasaki-05.html',
            controller: 'storeController'
        })
        .when('/offers/suzuki-01', {
            templateUrl: 'views/suzuki/suzuki-01.html',
            controller: 'storeController'
        })
        .when('/offers/suzuki-02', {
            templateUrl: 'views/suzuki/suzuki-02.html',
            controller: 'storeController'
        })
        .when('/offers/suzuki-03', {
            templateUrl: 'views/suzuki/suzuki-03.html',
            controller: 'storeController'
        })
        .when('/offers/suzuki-04', {
            templateUrl: 'views/suzuki/suzuki-04.html',
            controller: 'storeController'
        })
        .when('/offers/suzuki-05', {
            templateUrl: 'views/suzuki/suzuki-05.html',
            controller: 'storeController'
        })
        .when('/offers/harley-01', {
            templateUrl: 'views/harley/harley-01.html',
            controller: 'storeController'
        })
        .when('/offers/harley-02', {
            templateUrl: 'views/harley/harley-02.html',
            controller: 'storeController'
        })
        .when('/offers/harley-03', {
            templateUrl: 'views/harley/harley-03.html',
            controller: 'storeController'
        })
        .when('/offers/harley-04', {
            templateUrl: 'views/harley/harley-04.html',
            controller: 'storeController'
        })
        .when('/offers/harley-05', {
            templateUrl: 'views/harley/harley-05.html',
            controller: 'storeController'
        })
        .when('/cart', {
                templateUrl: 'views/cart/shopping-cart.html',
                controller: 'storeController'
            })
        .when('/store', {
                templateUrl: 'views/cart/store.html',
                controller: 'storeController'
            });
	$locationProvider.html5Mode(true);
    //Note: By default, Angular will throw a hash (#) into the URL. To get rid of this, we will need to use $locationProvider to enable the HTML History API. This will remove the hash and make pretty URLs
}]);