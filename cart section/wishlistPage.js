//<!----------------------Navbar--------------------->

document.querySelector("#cross").addEventListener("click", myfunction);

function myfunction() {

    document.querySelector("#offertag").remove()


}
var userDetailArr = JSON.parse(localStorage.getItem("userData"))
userDetailArr.forEach(function (el) {
    if (userDetailArr.length != 0) {
        document.querySelector('#loginanch').innerHTML = "Hi," + el.firstname
    }
});


//<!----------------------Body--------------------->

var items = JSON.parse(localStorage.getItem("wishItems")) || [];
if (items != 0) {
    document.querySelector("#emptyWishlist").innerHTML = "";

    items.forEach(function (elem, index) {
        // div to append data
        var card = document.createElement("div");

        // Product Image
        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
        image.style.height = "250px"

        // Product description
        var desc = document.createElement("h6");
        desc.innerText = elem.desc;
        desc.style.textTransform = "uppercase";
        desc.style.width = "66%";
        desc.style.margin = "auto";
        desc.style.textAlign = "center";
        desc.style.lineHeight = "20px";
        desc.style.fontFamily = "sanSerif";
        desc.style.color = "grey";

        //Product Price
        var price = document.createElement("p");
        price.innerText = elem.price;
        price.style.fontSize = "13px";

        // Wishlist Remove Icon
        var wishlistRemove = document.createElement("img");
        wishlistRemove.setAttribute("src", "images/wishlist_remove.png");
        wishlistRemove.style.height = "15px";
        wishlistRemove.style.padding = "2% 7.95%";
        wishlistRemove.style.cursor = "pointer";
        wishlistRemove.addEventListener("click", function () {
            deleteElement(elem, index);
            console.log("I am");
        });

        //Shop Now
        var shop = document.createElement("a");
        shop.setAttribute("href", "cart.html");
        shop.innerText = "SHOP NOW";
        shop.style.fontSize = "10px";
        shop.style.color = "white";
        shop.style.backgroundColor = "#1c1f23";
        shop.style.padding = "2% 30.5%";

        //div to append Wishlist Remove Icon and Shop Now Link
        var final = document.createElement("div");
        final.append(wishlistRemove, shop);
        final.style.display = "flex";
        final.style.justifyContent = "spaceBetween";
        final.style.border = "1px solid black";
        final.style.margin = "15px 0 0 0";

        card.append(image, desc, price, final);

        document.querySelector("#cards").append(card);
    });
    function deleteElement(elem, index) {
        items.splice(index, 1);
        localStorage.setItem("wishItems", JSON.stringify(items));
        window.location.reload();
    }
}
else {
    document.querySelector("#cards").innerHTML = "";
}

//<!----------------------Footer--------------------->

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