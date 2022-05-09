document.querySelector("#cross").addEventListener("click", myfunction);

function myfunction() {

   document.querySelector("#offertag").remove()


}
var userDetailArr = JSON.parse(localStorage.getItem("userData"))
userDetailArr.forEach(function (el) {
   if (userDetailArr.length != 0) {
      document.querySelector('#loginanch').innerHTML = "Hi," + el.firstName
      console.log("Hi");
   }
});
