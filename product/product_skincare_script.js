
let card = [
    {
        number :29,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName: 'AQUASOLIC WATER BOOST MAKS',
        imgUrl2: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-water-boost-mask-13548848087123.jpg?v=1619115321',
        price: 149,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.7,
        num_rating:"(27)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',

    },
    {
        number:17,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName: 'CITRUS GOT REAL COOLING STICK',
        imgUrl2: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-cooling-stick-28037939429459.jpg?v=1644409181',
        price: 399,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.,
        num_rating:"(38)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',
    
    },
    {
        number: 33,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName: 'CHEAT SHEET CLARIFYING MASK',
        imgUrl2: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702',
        price: 99,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.9,
        num_rating:"(43)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',    
    },
    {
        number:47,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName: 'CHARCOLA PATROL BUBBLE MASK',
        imgUrl2: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394',
        price: 149,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.9,
        num_rating:"(27)", 
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',   
    },
    {
        number:40,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName:'CHEAT SHEET ANTI-AGING MASK',
        imgUrl2:'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715',
        price:99,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.8,
        num_rating:"(48)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',
    },
    {
        number:5,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName:'COFFEE CULTURE EYE FIRMING CREAM',
        imgUrl2:'https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287',
        price:399,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.9,
        num_rating:"(12)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',
    },
    {
        number:3,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName:'AQUAHOLIC CLARIFYING SPOT GEL',
        imgUrl2:'https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Extention-Spot-gel-2.jpg?v=1626363976',
        price:399,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.7,
        num_rating:"(25)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',

    },
    {   number:4,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName:'SWIPE TIGHT CLEANSING WATER',
        imgUrl2:'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450',
        price:399,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.8,
        num_rating:"(52)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',
    },
    {
        number:3,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName:'ACNE COMBO (PACK OF 6)',
        imgUrl2:'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757',
        price:559,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 5,
        num_rating:"(1)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',
    },
    {
        number: 3,
        imgUrl1:'https://in.sugarcosmetics.com/ic_multiple_shades_opt2.png',
        productName:'COFFEE CULTURE PORE PURIFYING MASK',
        imgUrl2:'https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298',
        price:499,
        imgUrl3:'https://in.sugarcosmetics.com/star_filled.png',
        rating: 4.9,
        num_rating:"(7)",
        imgUrl4:'https://in.sugarcosmetics.com/favoriteBorderBlack.svg',
    },
    
   

]

// localStorage.setItem("card", JSON.stringify(card))

var product_cart = JSON.parse(localStorage.getItem("cart_item")) || [];

var arr = [];

card.forEach(function(elem) {
    
    var number = document.createElement("span");
    number.innerText = elem.number;

    var image1 = document.createElement("img");
    image1.setAttribute("src", elem.imgUrl1 );

    var pname = document.createElement("p");
    pname.innerText = elem.productName;
    pname.style.textAlign = "center";

    var image2 = document.createElement("img")
    image2.setAttribute("src", elem.imgUrl2);
    // image2.style.height ="20px";
    
    // image2.style.padding = "50px";


    var product_price = document.createElement("p");
    product_price.innerText = elem.price;
    product_price.style.textAlign ="center";


    var image3 = document.createElement("img")
    image3.setAttribute("src", elem.imgUrl3);

    var rating = document.createElement("p");
    rating.innerText = elem.rating;

    var num_rating = document.createElement("p");
    num_rating.innerText = elem.num_rating;

    var image4 = document.createElement("img")
    image4.setAttribute("src", elem.imgUrl4);
    image4.style.height = "20px"
    image4.style.width = "20px"
    image4.style.margin = "auto"

    var button = document.createElement("p")
    button.innerText = "Add to Cart";
    button.style.cursor ="pointer";
    button.style.backgroundColor = "#1f1c23";
    button.style.color = "white";
    button.style.padding = "10px";
    button.style.width = "80%";
    button.style.textAlign = "center";
    button.addEventListener("click", function(){
        var present = 0;
        product_cart.forEach(function(item) {
            if(item.productName == elem.productName) {
                present = 1;
            }
        });
        if(present == 0) {
            product_cart.push(elem);
            localStorage.setItem("cart_item", JSON.stringify(product_cart));
            var counter = 1;
            arr.push(counter);
            console.log(arr);
            localStorage.setItem("productCount", JSON.stringify(arr));
        }
        else{
            alert("Item already in cart");
        }
    });

    


//------------------------------------------------------------------------------
    
    var data = document.createElement("div");
    
    // data.setAttribute("class", )
    var cart_upper_section = document.createElement("div");

    cart_upper_section.append(number,image1);
    cart_upper_section.style.display = "flex";
    cart_upper_section.style.justifyContent = "flex-end";





    var Product_rating = document.createElement("div");
    Product_rating.append(image3, rating, num_rating);
    Product_rating.style.textAlign = "center";

    var image2 = document.createElement("img");
    image2.setAttribute("src", elem.imgUrl2);


    var add_to_card = document.createElement("div");
    add_to_card.append(image4 ,button);
    add_to_card.style.border="1px solid grey";
    add_to_card.style.display="flex";
    add_to_card.style.justifyContent ="space-between"
    add_to_card.style.alignContent ="center";
    
    // cart_upper_section.append(cart_upper_section_header, image2, pname, price, star_rate)
    

    data.append(cart_upper_section, image2, pname,product_price, Product_rating,add_to_card);

    
    // var num = document.createElement("span");
    // num.innerText = elem.number

    // var image0 =document.createElement("img");
    // image0.innerText = elem.imgUrl1
    
    // var div3_0_1 = document.createElement("div");
    // div3_0_1.setAttribute("class", div3_0_1);
    // div3_0_1.append(image0);

    // var card_upper_section_header = document.createElement("div");
    // card_upper_section_header.append(num, div3_0_1);
    // card_upper_section_header.style.display = "flex"
    // card_upper_section_header.style.justifyContent = "flex-end"


     
   
   
    // var image1 = document.createElement("img");
    // image1.setAttribute("src", elem.imgUrl2);
    // image1.style.height = "250px"
    // image1.style.width ="250px"
    

    // var name = document.createElement("h2");
    // name.innerText = elem.productName;
    // name.style.fontSize ="13px"

    // var price = document.createElement("p");
    // price.innerText = elem.price;




    // var rating = document.createElement("p");
    // rating.innerText = elem.rating;

    // var num_rating = document.createElement("p");
    // num_rating.innerText = elem.num_rating;

    // var card_rating = document.createElement("div")
    // card_rating.setAttribute("class", card_rating);
    // card_rating.append(rating, num_rating);
    // card_rating.style.display = "flex";


    // data.append(num, image0, image1, name, price, card_rating);




    document.querySelector("#card_container").append(data);
});



// ---------------------------------nav bar ---------------------------------------

document.querySelector("#cross").addEventListener("click", myfunction);

 function myfunction(){
   
    document.querySelector("#offertag").remove()
    
  
 }
 var userDetailArr=JSON.parse(localStorage.getItem("userData"))
 userDetailArr.forEach(function(el){
    if(userDetailArr.length!=0){
  document.querySelector('#loginanch').innerHTML="Hi,"+el.firstname
 }
 });

// ---------------------------------footer -----------------------------------------

document.querySelector("button").addEventListener("click", redirect)

function redirect() {
    var mail = document.querySelector("#newsletter_footer").value
    if (mail == "") {
        var delay = 2000;

        document.querySelector("#error_footer").innerHTML = "please enter valid email"

        setTimeout(function () {
            window.location.reload();
        }, delay);
    }
    else {
        window.location.href = "../login pages/login.html";
    }
}