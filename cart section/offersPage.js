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