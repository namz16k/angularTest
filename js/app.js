

(function(){
var app = angular.module("store",[]);
    

    
    app.controller("StoreController",function(){
        this.products = gems;
    
    });
    
        app.controller("PanelController",function(){
        this.tab=1;
        this.selectTab = function(tabVal){
            this.tab = tabVal;
        
        };
        this.isTab = function(tabVal){
        return (this.tab == tabVal);
        };
    
    });
    
    
    var gems = [
        {
            name:'Diamond',
            price:5,
            description:'very valuable',
            canPurchase:true,
            soldOut:false,
            reviews:[
                {   
                    stars: 5,
                    body:"I love this product",
                    author:"abc@gmail.com"
                },
                {
                    stars: 3,
                    body:"I like this product",
                    author:"abrrc@gmail.com"},
                
                {   stars: 4,
                    body:"iys a gud product",
                    author:"ttyy@gmail.com"}
            
            
            
            
            
            ],
            images:[
                {
                    full:'diamond-full-2.jpg',
                    thumb:'diamond-thumb.jpg'
                },
                {   full:'diamond-full-2.jpg',
                    thumb:'diamond-thumb-2.jpg'
                }
            
            ]
    
        },
        {
            name:'Ruby',
            price:4,
            description:'very red',
            canPurchase:true,
            soldOut:false,
            images:[
                {
                    full:'ruby-full.jpg',
                    thumb:'ruby-thumb.jpg'
                }
            
            ]
    
        },     
         {
            name:'emarald',
            price:7,
            description:'very green',
            canPurchase:true,
            soldOut:false,
            images:[
                {
                    full:'emarlad-full.jpg',
                    thumb:'emarlad-thumb.jpg'
                }
            
            ]
    
        },  
    ]

})();