

(function(){
var app = angular.module("store",[]);
    
    
    app.controller("StoreController",function(){
        this.product = gem;
    
    });
    
    var gem = {
        name:'Diamond',
        price:5,
        description:'very valuable',
        canPurchase:true,
        soldOut:false
    
    }

})();