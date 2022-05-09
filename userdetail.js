function isEmpty(){
event.preventDefault()
var email=document.getElementById("email").value 
if(email != ""){
document.getElementById("save").style.backgroundColor="rgba(244, 53, 136,1)"
}
}
var userDetailArr=JSON.parse(localStorage.getItem("userData")) || []
document.querySelector("form").addEventListener("submit",saveFun)
function saveFun(){
event.preventDefault()
var userDetail={
firstName:form.fname.value,
secondName:form.lname.value,
email:form.email.value 
}
userDetailArr.push(userDetail)
localStorage.setItem("userData",JSON.stringify(userDetailArr))
window.location.href="homePage.html"
}
