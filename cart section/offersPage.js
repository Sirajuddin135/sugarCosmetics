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
    var mail = document.querySelector("#newsletter").value
    if (mail == "") {


        document.querySelector("#error").innerHTML = "please enter valid email"

        var delay = 2000
        setTimeout(function () {
            window.location.reload()
        }, delay)
    }
}