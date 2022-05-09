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

var total = 0;

var items = JSON.parse(localStorage.getItem("cartItems")) || [];

var wishlistItems = JSON.parse(localStorage.getItem("wishItems")) || [];

var counter = JSON.parse(localStorage.getItem("counter"));

var temp = [];

var arr = JSON.parse(localStorage.getItem("productCount")) || [];

if (items != 0) {
    var present = 0;

    document.querySelector("#emptyCart").innerHTML = "";

    items.forEach(function (elem, index) {
        // div to append data
        var item = document.createElement("div");
        item.style.margin = "auto";

        // Product Image
        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
        image.style.height = "80px";

        // Product description
        var desc = document.createElement("h6");
        desc.innerText = elem.desc;
        desc.style.textTransform = "uppercase";
        desc.style.lineHeight = "20px";
        desc.style.fontFamily = "sanSerif";

        // Wishlist Icon
        var wishlistIcon = document.createElement("img");
        wishlistIcon.setAttribute("src", "images/wishlist.png");
        wishlistIcon.innerHTML = "Save to Wishlist";
        wishlistIcon.style.width = "15px";
        wishlistIcon.style.height = "15px";

        // Wishlist Text
        var wishlistText = document.createElement("p");
        wishlistText.innerText = "Save to Wishlist";
        wishlistText.style.fontSize = "13px";

        // div to append Wishlist Icon & Text
        var wishlist = document.createElement("div");
        wishlist.append(wishlistIcon, wishlistText);
        wishlist.style.display = "flex";
        wishlist.style.cursor = "pointer";
        wishlist.addEventListener("click", function () {
            present = 0;
            wishlistItems.forEach(function (obj) {
                if (obj.desc == elem.desc) {
                    present = 1;
                }
            });

            if (present == 0) {
                wishlistItems.push(elem);
                localStorage.setItem("wishItems", JSON.stringify(wishlistItems));
            }
        });

        // div1 to append Product Name and Wishlist
        var div1 = document.createElement("div");
        div1.append(desc, wishlist);
        div1.style.width = "240px";
        div1.style.padding = "10px";
        div1.style.margin = "auto";

        // Delete Icon
        var del = document.createElement("img");
        del.setAttribute("src", "images/delete.png");
        del.style.height = "15px";
        del.style.margin = "auto";
        del.style.padding = "15px";
        del.style.cursor = "pointer";
        del.addEventListener("click", function () {
            deleteItem(elem, index, arr);
        });

        // Decrement
        var decrement = document.createElement("p");
        decrement.innerText = "-";
        decrement.style.fontSize = "20px";
        decrement.style.color = "white";
        decrement.style.padding = "0px 9px";
        decrement.style.borderRadius = "15px";
        decrement.style.margin = "auto";
        decrement.style.backgroundColor = "black";
        decrement.style.cursor = "pointer";
        decrement.addEventListener("click", function () {
            arr[index]--;
            if (arr[index] <= 0) {
                deleteItem(elem, index, arr);
                window.location.reload();
            }
            count.innerText = arr[index];
            localStorage.setItem("productCount", JSON.stringify(arr));
            window.location.reload();
        });

        // Product Counter
        var count = document.createElement("p");
        count.innerText = arr[index];
        count.style.textAlign = "center";
        count.style.margin = "auto";
        count.style.padding = "5px";

        // Increment
        var increment = document.createElement("p");
        increment.innerText = "+";
        increment.style.fontSize = "20px"
        increment.style.color = "white";
        increment.style.padding = "0px 7px";
        increment.style.borderRadius = "15px";
        increment.style.margin = "auto";
        increment.style.backgroundColor = "black";
        increment.style.cursor = "pointer";
        increment.addEventListener("click", function () {
            arr[index]++;
            count.innerText = arr[index];
            localStorage.setItem("productCount", JSON.stringify(arr));
            window.location.reload();
        });
        // div2 to append counter
        var div2 = document.createElement("div");
        div2.append(decrement, count, increment);
        div2.style.width = "13%";
        div2.style.display = "flex";
        div2.style.justifyContent = "space-between";
        div2.style.margin = "auto";

        // Product Amount
        var amount = document.createElement("p");
        total += count.innerText * elem.price;
        amount.innerText = count.innerText + " x " + elem.price + " = " + count.innerText * elem.price;
        amount.style.fontSize = "13px";
        amount.style.margin = "auto";
        amount.style.padding = "5px";

        present = 0;
        temp.forEach(function (obj) {
            if (obj.desc == elem.desc) {
                present = 1;
            }
        });

        if (present == 0) {
            counter = 1;
            arr.push(counter);
            count.innerText = arr[index];
            localStorage.setItem("counter", JSON.stringify(counter));
            temp.push(elem);
            item.append(image, div1, del, div2, amount);
            document.querySelector("#container1").append(item);
        }
    });

    pricing(total);

    function pricing(total) {
        var shipping = 49;
        var discount = 0;
        var totalAmount = 0;
        if (total >= 499) {
            shipping = 0;
        }

        if (total >= 2499) {
            discount = 2300;
            totalAmount = total - discount + shipping;
        }
        else if (total >= 1999) {
            discount = 1699;
            totalAmount = total - discount + shipping;
        }
        else if (total >= 1499) {
            discount = 1299;
            totalAmount = total - discount + shipping;
        }
        else if (total >= 1099) {
            discount = 799;
            totalAmount = total - discount + shipping;
        }
        else if (total >= 998) {
            discount = 996;
            totalAmount = total - discount + shipping;
        }
        else if (total >= 599) {
            discount = 399;
            totalAmount = total - discount + shipping;
        }
        else {
            totalAmount = total + shipping;
        }

        document.querySelector("#cartPrice").innerText = "Cart Total : Rs. " + totalAmount + ".00";
        document.querySelector("#sub").innerText = "₹ " + total + ".00";
        document.querySelector("#ship").innerText = "₹ " + shipping + ".00";
        document.querySelector("#dis").innerText = "₹ " + discount + ".00";
        document.querySelector("#totalAmount").innerText = "₹ " + totalAmount + ".00";
        document.querySelector("#final>a:nth-child(2)").innerText = "Proceed to Payment (Rs. " + totalAmount + ".00)";
    }

    function deleteItem(elem, index, arr) {
        items.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(items));
        total -= arr[index] * elem.price;
        arr.splice(index, 1);
        localStorage.setItem("productCount", JSON.stringify(arr));
        pricing(total);
        window.location.reload();
    }
}
else {
    document.querySelector("#cartPage").innerHTML = "";
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