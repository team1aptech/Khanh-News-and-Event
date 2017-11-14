var storeApp = angular.module('StoreCtrl', []);

storeApp.factory("DataService", function ($http) {

    // create store
    var myStore = {};
    myStore.products = {};
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

storeApp.controller("storeController", function ($scope, DataService) {
    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

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