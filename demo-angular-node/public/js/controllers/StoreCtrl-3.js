var storeApp = angular.module('StoreCtrl', ['ngStorage']);

storeApp.factory("DataService", function ($http) {

    // create store
    var myStore = {};
    myStore.products = [];
    $http.get("data/data-product-price.json").then(function (response) {
        myStore.products = response.data.product;
    });
    myStore.products.bmws = [];
    $http.get("data/data-product-price.json").then(function (response) {
        myStore.products.bmws = response.data.product.bmw;
    });

    myStore.products.yamahaes = [];
    $http.get("data/data-product-price.json").then(function (response) {
        myStore.products.yamahaes = response.data.product.yamaha;
    });

    myStore.products.hondaes = [];
    $http.get("data/data-product-price.json").then(function (response) {
        myStore.products.hondaes = response.data.product.honda;
    });

    myStore.products.kawasakies = [];
    $http.get("data/data-product-price.json").then(function (response) {
        myStore.products.kawasakies = response.data.product.kawasaki;
    });

    myStore.products.suzukies = [];
    $http.get("data/data-product-price.json").then(function (response) {
        myStore.products.suzukies = response.data.product.suzuki;
    });

    myStore.products.harleys = [];
    $http.get("data/data-product-price.json").then(function (response) {
        myStore.products.harleys = response.data.product.harley;
    });

    // create shopping cart
    var myCart = new shoppingCart("motorStore");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    }; 
});

storeApp.controller("storeController", function ($scope, DataService,$http,$localStorage) {
    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    $scope.prices = [];
    $http.get("data/prices.json").then(function (response) {
        $scope.prices = response.data.manufacture;
    });

    //comment data
    $scope.commentSinglePageNews01Data = {};
    $scope.commentBmw01Data = {};
    $scope.commentBmw02Data = {};
    $scope.commentBmw03Data = {};
    $scope.commentBmw04Data = {};
    $scope.commentBmw05Data = {};
    $scope.commentHarley01Data = {};
    $scope.commentHarley02Data = {};
    $scope.commentHarley03Data = {};
    $scope.commentHarley04Data = {};
    $scope.commentHarley05Data = {};
    $scope.commentHonda01Data = {};
    $scope.commentHonda02Data = {};
    $scope.commentHonda03Data = {};
    $scope.commentHonda04Data = {};
    $scope.commentHonda05Data = {};
    $scope.commentKawasaki01Data = {};
    $scope.commentKawasaki02Data = {};
    $scope.commentKawasaki03Data = {};
    $scope.commentKawasaki04Data = {};
    $scope.commentKawasaki05Data = {};
    $scope.commentSuzuki01Data = {};
    $scope.commentSuzuki02Data = {};
    $scope.commentSuzuki03Data = {};
    $scope.commentSuzuki04Data = {};
    $scope.commentSuzuki05Data = {};
    $scope.commentYamaha01Data = {};
    $scope.commentYamaha02Data = {};
    $scope.commentYamaha03Data = {};
    $scope.commentYamaha04Data = {};
    $scope.commentYamaha05Data = {};
    $scope.userData = {};
    $scope.commentSinglePageNews01 = [];
    $scope.commentBmw01 = [];
    $scope.commentBmw02 = [];
    $scope.commentBmw03 = [];
    $scope.commentBmw04 = [];
    $scope.commentBmw05 = [];
    $scope.commentHarley01 = [];
    $scope.commentHarley02 = [];
    $scope.commentHarley03 = [];
    $scope.commentHarley04 = [];
    $scope.commentHarley05 = [];
    $scope.commentHonda01 = [];
    $scope.commentHonda02 = [];
    $scope.commentHonda03 = [];
    $scope.commentHonda04 = [];
    $scope.commentHonda05 = [];
    $scope.commentKawasaki01 = [];
    $scope.commentKawasaki02 = [];
    $scope.commentKawasaki03 = [];
    $scope.commentKawasaki04 = [];
    $scope.commentKawasaki05 = [];
    $scope.commentSuzuki01 = [];
    $scope.commentSuzuki02 = [];
    $scope.commentSuzuki03 = [];
    $scope.commentSuzuki04 = [];
    $scope.commentSuzuki05 = [];
    $scope.commentYamaha01 = [];
    $scope.commentYamaha02 = [];
    $scope.commentYamaha03 = [];
    $scope.commentYamaha04 = [];
    $scope.commentYamaha05 = [];
    $scope.user = [];
    $http.get('/api/user').then(function(response) {
        $scope.user = response.data;
    });

    $http.get('/api/comments/commentNews-01').then(function(response) {
        $scope.commentSinglePageNews01 = response.data;
    });

    $http.get('/api/comments/bmw-01').then(function(response) {
        $scope.commentBmw01 = response.data;
    });
    $http.get('/api/comments/bmw-02').then(function(response) {
        $scope.commentBmw02 = response.data;
    });
    $http.get('/api/comments/bmw-03').then(function(response) {
        $scope.commentBmw03 = response.data;
    });
    $http.get('/api/comments/bmw-04').then(function(response) {
        $scope.commentBmw04 = response.data;
    });
    $http.get('/api/comments/bmw-05').then(function(response) {
        $scope.commentBmw05 = response.data;
    });
    $http.get('/api/comments/harley-01').then(function(response) {
        $scope.commentHarley01 = response.data;
    });
    $http.get('/api/comments/harley-02').then(function(response) {
        $scope.commentHarley02 = response.data;
    });
    $http.get('/api/comments/harley-03').then(function(response) {
        $scope.commentHarley03 = response.data;
    });
    $http.get('/api/comments/harley-04').then(function(response) {
        $scope.commentHarley04 = response.data;
    });
    $http.get('/api/comments/harley-05').then(function(response) {
        $scope.commentHarley05 = response.data;
    });
    $http.get('/api/comments/honda-01').then(function(response) {
        $scope.commentHonda01 = response.data;
    });
    $http.get('/api/comments/honda-02').then(function(response) {
        $scope.commentHonda02 = response.data;
    });
    $http.get('/api/comments/honda-03').then(function(response) {
        $scope.commentHonda03 = response.data;
    });
    $http.get('/api/comments/honda-04').then(function(response) {
        $scope.commentHonda04 = response.data;
    });
    $http.get('/api/comments/honda-05').then(function(response) {
        $scope.commentHonda05 = response.data;
    });
    $http.get('/api/comments/kawasaki-01').then(function(response) {
        $scope.commentKawasaki01 = response.data;
    });
    $http.get('/api/comments/kawasaki-02').then(function(response) {
        $scope.commentKawasaki02 = response.data;
    });
    $http.get('/api/comments/kawasaki-03').then(function(response) {
        $scope.commentKawasaki03 = response.data;
    });
    $http.get('/api/comments/kawasaki-04').then(function(response) {
        $scope.commentKawasaki04 = response.data;
    });
    $http.get('/api/comments/kawasaki-05').then(function(response) {
        $scope.commentKawasaki05 = response.data;
    });
    $http.get('/api/comments/suzuki-01').then(function(response) {
        $scope.commentSuzuki01 = response.data;
    });
    $http.get('/api/comments/suzuki-02').then(function(response) {
        $scope.commentSuzuki02 = response.data;
    });
    $http.get('/api/comments/suzuki-03').then(function(response) {
        $scope.commentSuzuki03 = response.data;
    });
    $http.get('/api/comments/suzuki-04').then(function(response) {
        $scope.commentSuzuki04 = response.data;
    });
    $http.get('/api/comments/suzuki-05').then(function(response) {
        $scope.commentSuzuki05 = response.data;
    });
    $http.get('/api/comments/yamaha-01').then(function(response) {
        $scope.commentYamaha01 = response.data;
    });
    $http.get('/api/comments/yamaha-02').then(function(response) {
        $scope.commentYamaha02 = response.data;
    });
    $http.get('/api/comments/yamaha-03').then(function(response) {
        $scope.commentYamaha03 = response.data;
    });
    $http.get('/api/comments/yamaha-04').then(function(response) {
        $scope.commentYamaha04 = response.data;
    });
    $http.get('/api/comments/yamaha-05').then(function(response) {
        $scope.commentYamaha05 = response.data;
    });

    $scope.showUser = $localStorage.findUser;

    $scope.showPermanently = function(){
        $scope.showUser = true; // set the ng-show value into true
        $localStorage.findUser = $scope.showUser;
    };

    $scope.hidePermanently = function(){
        $scope.showUser = false; // set the ng-show value into true
        $localStorage.findUser = $scope.showUser;
    };

    $scope.createUser = function () {
        $http.post('/api/user', $scope.userData).then(function (response) {
            $scope.user = response.data;
        });
    };

    $scope.logOutUser = function () {
        $http.post('/api/user', $scope.userData).then(function (response) {
            $scope.user = response.data;
        });
    };

    $scope.createCommentSinglePageNews01 = function () {
        $http.post('/api/comments/commentNews-01', $scope.commentSinglePageNews01Data).then(function (response) {
            $scope.commentSinglePageNews01Data = {};
            $scope.commentSinglePageNews01 = response.data;
        })
    };

    $scope.createCommentBmw01 = function () {
        $http.post('/api/comments/bmw-01', $scope.commentBmw01Data).then(function (response) {
            $scope.commentBmw01Data = {};
            $scope.commentBmw01 = response.data;
        })
    };
    $scope.createCommentBmw02 = function () {
        $http.post('/api/comments/bmw-02', $scope.commentBmw02Data).then(function (response) {
            $scope.commentBmw02Data = {};
            $scope.commentBmw02 = response.data;
        })
    };
    $scope.createCommentBmw03 = function () {
        $http.post('/api/comments/bmw-03', $scope.commentBmw03Data).then(function (response) {
            $scope.commentBmw03Data = {};
            $scope.commentBmw03 = response.data;
        })
    };
    $scope.createCommentBmw04 = function () {
        $http.post('/api/comments/bmw-04', $scope.commentBmw04Data).then(function (response) {
            $scope.commentBmw04Data = {};
            $scope.commentBmw04 = response.data;
        })
    };
    $scope.createCommentBmw05 = function () {
        $http.post('/api/comments/bmw-05', $scope.commentBmw05Data).then(function (response) {
            $scope.commentBmw05Data = {};
            $scope.commentBmw05 = response.data;
        })
    };
    $scope.createCommentHarley01 = function () {
        $http.post('/api/comments/harley-01', $scope.commentHarley01Data).then(function (response) {
            $scope.commentHarley01Data = {};
            $scope.commentHarley01 = response.data;
        })
    };
    $scope.createCommentHarley02 = function () {
        $http.post('/api/comments/harley-02', $scope.commentHarley02Data).then(function (response) {
            $scope.commentHarley02Data = {};
            $scope.commentHarley02 = response.data;
        })
    };
    $scope.createCommentHarley03 = function () {
        $http.post('/api/comments/harley-03', $scope.commentHarley03Data).then(function (response) {
            $scope.commentHarley03Data = {};
            $scope.commentHarley03 = response.data;
        })
    };
    $scope.createCommentHarley04 = function () {
        $http.post('/api/comments/harley-04', $scope.commentHarley04Data).then(function (response) {
            $scope.commentHarley04Data = {};
            $scope.commentHarley04 = response.data;
        })
    };
    $scope.createCommentHarley05 = function () {
        $http.post('/api/comments/harley-05', $scope.commentHarley05Data).then(function (response) {
            $scope.commentHarley05Data = {};
            $scope.commentHarley05 = response.data;
        })
    };
    $scope.createCommentHonda01 = function () {
        $http.post('/api/comments/honda-01', $scope.commentHonda01Data).then(function (response) {
            $scope.commentHonda01Data = {};
            $scope.commentHonda01 = response.data;
        })
    };
    $scope.createCommentHonda02 = function () {
        $http.post('/api/comments/honda-02', $scope.commentHonda02Data).then(function (response) {
            $scope.commentHonda02Data = {};
            $scope.commentHonda02 = response.data;
        })
    };
    $scope.createCommentHonda03 = function () {
        $http.post('/api/comments/honda-03', $scope.commentHonda03Data).then(function (response) {
            $scope.commentHonda03Data = {};
            $scope.commentHonda03 = response.data;
        })
    };
    $scope.createCommentHonda04 = function () {
        $http.post('/api/comments/honda-04', $scope.commentHonda04Data).then(function (response) {
            $scope.commentHonda04Data = {};
            $scope.commentHonda04 = response.data;
        })
    };
    $scope.createCommentHonda05 = function () {
        $http.post('/api/comments/honda-05', $scope.commentHonda05Data).then(function (response) {
            $scope.commentHonda05Data = {};
            $scope.commentHonda05 = response.data;
        })
    };
    $scope.createCommentKawasaki01 = function () {
        $http.post('/api/comments/kawasaki-01', $scope.commentKawasaki01Data).then(function (response) {
            $scope.commentKawasaki01Data = {};
            $scope.commentKawasaki01 = response.data;
        })
    };
    $scope.createCommentKawasaki02 = function () {
        $http.post('/api/comments/kawasaki-02', $scope.commentKawasaki02Data).then(function (response) {
            $scope.commentKawasaki02Data = {};
            $scope.commentKawasaki02 = response.data;
        })
    };
    $scope.createCommentKawasaki03 = function () {
        $http.post('/api/comments/kawasaki-03', $scope.commentKawasaki03Data).then(function (response) {
            $scope.commentKawasaki03Data = {};
            $scope.commentKawasaki03 = response.data;
        })
    };
    $scope.createCommentKawasaki04 = function () {
        $http.post('/api/comments/kawasaki-04', $scope.commentKawasaki04Data).then(function (response) {
            $scope.commentKawasaki04Data = {};
            $scope.commentKawasaki04 = response.data;
        })
    };
    $scope.createCommentKawasaki05 = function () {
        $http.post('/api/comments/kawasaki-05', $scope.commentKawasaki05Data).then(function (response) {
            $scope.commentKawasaki05Data = {};
            $scope.commentKawasaki05 = response.data;
        })
    };
    $scope.createCommentSuzuki01 = function () {
        $http.post('/api/comments/suzuki-01', $scope.commentSuzuki01Data).then(function (response) {
            $scope.commentSuzuki01Data = {};
            $scope.commentSuzuki01 = response.data;
        })
    };
    $scope.createCommentSuzuki02 = function () {
        $http.post('/api/comments/suzuki-02', $scope.commentSuzuki02Data).then(function (response) {
            $scope.commentSuzuki02Data = {};
            $scope.commentSuzuki02 = response.data;
        })
    };
    $scope.createCommentSuzuki03 = function () {
        $http.post('/api/comments/suzuki-03', $scope.commentSuzuki03Data).then(function (response) {
            $scope.commentSuzuki03Data = {};
            $scope.commentSuzuki03 = response.data;
        })
    };
    $scope.createCommentSuzuki04 = function () {
        $http.post('/api/comments/suzuki-04', $scope.commentSuzuki04Data).then(function (response) {
            $scope.commentSuzuki04Data = {};
            $scope.commentSuzuki04 = response.data;
        })
    };
    $scope.createCommentSuzuki05 = function () {
        $http.post('/api/comments/suzuki-05', $scope.commentSuzuki05Data).then(function (response) {
            $scope.commentSuzuki05Data = {};
            $scope.commentSuzuki05 = response.data;
        })
    };
    $scope.createCommentYamaha01 = function () {
        $http.post('/api/comments/yamaha-01', $scope.commentYamaha01Data).then(function (response) {
            $scope.commentYamaha01Data = {};
            $scope.commentYamaha01 = response.data;
        })
    };
    $scope.createCommentYamaha02 = function () {
        $http.post('/api/comments/yamaha-02', $scope.commentYamaha02Data).then(function (response) {
            $scope.commentYamaha02Data = {};
            $scope.commentYamaha02 = response.data;
        })
    };
    $scope.createCommentYamaha03 = function () {
        $http.post('/api/comments/yamaha-03', $scope.commentYamaha03Data).then(function (response) {
            $scope.commentYamaha03Data = {};
            $scope.commentYamaha03 = response.data;
        })
    };
    $scope.createCommentYamaha04 = function () {
        $http.post('/api/comments/yamaha-04', $scope.commentYamaha04Data).then(function (response) {
            $scope.commentYamaha04Data = {};
            $scope.commentYamaha04 = response.data;
        })
    };
    $scope.createCommentYamaha05 = function () {
        $http.post('/api/comments/yamaha-05', $scope.commentYamaha05Data).then(function (response) {
            $scope.commentYamaha05Data = {};
            $scope.commentYamaha05 = response.data;
        })
    };


    // clear the store
    // $window.localStorage.clear();
    // $location.path('/');
});


// items in the cart
function cartItem(branch, name, price, quantity) {
    this.branch = branch;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
// shopping cart

function shoppingCart(cartName) {
    this.cartName = cartName;
    this.items = [];
    // load items from local storage when initializing
    this.loadItems();
}

shoppingCart.prototype.loadItems = function () {
    // load from local storage
    var items = localStorage;
        items = localStorage[this.cartName + "_items"];
    if (items != null) {
        items = JSON.parse(items);
        console.log(items);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item = new cartItem(item.branch, item.name, item.price, item.quantity);
            this.items.push(item);
        }
    }
    console.log(localStorage);
};
// save items to local storage
shoppingCart.prototype.saveItems = function () {
        localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
        console.log(localStorage);      //checkLocalStorage
};

shoppingCart.prototype.addItem = function (branch, name, price, quantity) {
        // update quantity for existing item
        var found = false;
        for (var i = 0; i < this.items.length && !found; i++) {
            var item = this.items[i];
            if (item.name === name) {
                found = true;
                item.quantity += quantity;
            }
        }
        // new item, add now
        console.log(found);
        if (!found) {
            item = new cartItem(branch, name, price, quantity);
            this.items.push(item);
        }
        // save changes
        this.saveItems();
};

shoppingCart.prototype.removeItem = function(entry){
    var index = this.items.indexOf(entry);
    this.items.splice(index, 1);
    this.saveItems();
};
// clear the cart
shoppingCart.prototype.clearItems = function () {
    this.items = [];
    this.saveItems();
};
// get the total price for all items currently in the cart
shoppingCart.prototype.getTotalCount = function () {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
            count += item.quantity;
    }
    return count;
};
// get the total price for all items currently in the cart
shoppingCart.prototype.getTotalPrice = function () {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
            total += item.quantity * item.price;
    }
    return total;
};