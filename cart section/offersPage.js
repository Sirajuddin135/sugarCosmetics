//<!----------------------Navbar--------------------->

document.querySelector("#cross").addEventListener("click", myfunction);
function myfunction() {
    document.querySelector("#offertag").remove();
}

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