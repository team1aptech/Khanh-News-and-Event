var storeApp = angular.module('StoreCtrl', []);

storeApp.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});

storeApp.controller("storeController", function ($scope, $routeParams, DataService) {
    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // apply changes when cart items change
    // $scope.cart.itemsChanged = function (e) {
    //     if (!$scope.$$phase) {
    //         $scope.$apply();
    //     }
    // };


});


function store() {
    this.products = [
        {branch: "BMW", name: "BMWS1000RR", description: "Liquid-cooled 4-stroke in-line 4-cylinder engine.", price: 15.995},
        {branch: "Harley-Davidson", name: "Softail Fat Bob", description: "Is a great way to turn heads while having a blast on two wheels.", price: 16.999},
        {branch: "Honda", name: "NM4", description: "Honda's 2018 NM4 is a great way to see the world on two wheels.", price: 15.6},
        {branch: "Honda", name: "NM4", description: "Honda's 2018 NM4 is a great way to see the world on two wheels.", price: 15.995},
        {branch: "YAMAHA", name: "YZF-R6", description: "YZF-R6 with next generation R-series design.", price: 15.995}
    ];
}


// items in the cart
function cartItem(branch, name, price, quantity) {
    this.branch = branch;
    this.name = name;
    this.price = price * 1;
    this.quantity = quantity * 1;
}


function shoppingCart(cartName) {
    this.cartName = cartName;
    this.clearCart = false;
    this.checkoutParameters = {};
    this.items = [];

    // load items from local storage when initializing
    this.loadItems = function () {
        // load from local storage
        items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
        items = JSON.parse(items);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item = new cartItem(item.branch, item.name, item.price, item.quantity);
            this.items.push(item);
        }

        this.saveItems = function () {
            if (localStorage != null && JSON != null) {
                localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
            }
        };
        this.addItem = function (branch, name, price, quantity) {
            quantity = this.toNumber(quantity);
            if (quantity != 0) {
                // update quantity for existing item
                var found = false;
                for (var i = 0; i < this.items.length && !found; i++) {
                    var item = this.items[i];
                    if (item.branch == branch) {
                        found = true;
                        item.quantity = this.toNumber(item.quantity + quantity);
                        if (item.quantity <= 0) {
                            this.items.splice(i, 1);
                        }
                    }
                }
                // new item, add now
                console.log(!found);
                if (!found) {
                    var item = new cartItem(branch, name, price, quantity);
                    this.items.push(item);
                }
                // save changes
                this.saveItems();
            }
            // console.log(this.items);
            // console.log(localStorage);      //checkLocalStorage

        };
        this.toNumber = function (value) {
            value = value * 1;
            return isNaN(value) ? 0 : value;
        };
        // this.clearItems = function () {
        //     this.items = [];
        //     this.saveItems();
        // };

        // console.log(this.items);
        // console.log(shoppingCart.cartName + "_items");
        // console.log(JSON);
        // console.log(localStorage);
        // };


        // // save items to local storage when unloading
        // var self = this;
        // $(window).on("beforeunload", function () {
        //     if (self.clearCart) {
        //         self.clearItems();
        //     }
        //     self.saveItems();
        //     self.clearCart = false;
        // });
        //
        // // re-load items when the local storage changes
        // $(window).on('storage', function (e) {
        //     if (e.originalEvent.key == self.cartName + '_items' && !self.savingItems) {
        //         self.loadItems();
        //     }
        // });

    };

    console.log(this.items);
    console.log(localStorage);      //checkLocalStorage
// shoppingCart.prototype.loadItems = function () {
//
//     // var items = [];
//     // empty list
//     // this.items.splice(0, this.items.length);
//
//     // load from local storage
//     var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
//
//     // if (items != null && JSON != null) {
//     // try {
//     // console.log(items);
//     items = JSON.parse(items);
//     // console.log(items);
//
//     for (var i = 0; i < items.length; i++) {
//         var item = items[i];
//         // if (item.branch != null && item.name != null && item.price != null && item.quantity != null) {
//         item = new cartItem(item.branch, item.name, item.price, item.quantity);
//         this.items.push(item);
//         // }
}
// }
// catch (err) {
//     // ignore errors while loading...
// }
// }

// notify listeners of change
// if (this.itemsChanged) {
//     this.itemsChanged();
// }
// console.log(localStorage);
// console.log(items);

// };

// save items to local storage
// shoppingCart.prototype.saveItems = function () {
//     if (localStorage != null && JSON != null) {
//         localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
//     }
// console.log(this.items);
// console.log(shoppingCart.cartName + "_items");
// console.log(JSON);
// console.log(localStorage);
// };



// shoppingCart.prototype.addItem = function (branch, name, price, quantity) {
//     quantity = this.toNumber(quantity);
//     if (quantity != 0) {
//
//         // update quantity for existing item
//         var found = false;
//         for (var i = 0; i < this.items.length && !found; i++) {
//             var item = this.items[i];
//             if (item.branch == branch) {
//                 found = true;
//                 item.quantity = this.toNumber(item.quantity + quantity);
//                 if (item.quantity <= 0) {
//                     this.items.splice(i, 1);
//                 }
//
//             }
//         }
//
//         // new item, add now
//         console.log(!found);
//         if (!found) {
//             var item = new cartItem(branch, name, price, quantity);
//             this.items.push(item);
//         }
//
//         // save changes
//         this.saveItems();
//     }
//     // console.log(this.items);
//     console.log(localStorage);      //checkLocalStorage
//
// };

// shoppingCart.prototype.toNumber = function (value) {
//     value = value * 1;
//     return isNaN(value) ? 0 : value;
// };
console.log(JSON);



// // clear the cart
// shoppingCart.prototype.clearItems = function () {
//     this.items = [];
//     this.saveItems();
// };