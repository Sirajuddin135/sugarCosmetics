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

var form = document.querySelector("form");
var OTP = 13579;

form.addEventListener("submit", proceedToPayment);

function proceedToPayment() {
    event.preventDefault();
    var number = document.querySelector("#cardNumber").value;
    var name = document.querySelector("#cardName").value;
    var cvv = document.querySelector("#cardCVV").value;
    if (number.length == 16 && name != 0 && cvv.length == 3) {
        alert("OTP to proceed for payment : " + OTP);
        document.querySelector("#cardNumber").value = "";
        document.querySelector("#cardName").value = "";
        document.querySelector("#cardCVV").value = "";
    }
    else {
        alert("Please fill correct details in all fields.");
    }
}

document.querySelector("#otpSubmit").addEventListener("click", function () {
    event.preventDefault();
    var otpNum = document.querySelector("#otpNumber").value;
    if (otpNum == OTP) {
        alert("Payment Completed");
        localStorage.setItem("cartItems", JSON.stringify(""));
        document.querySelector("#otpNumber").value = "";
        window.location.href = "cartPage.html";
    }
    else {
        alert("Wrong OTP");
    }
});

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