function empty(){
event.preventDefault()
var lastnum=document.getElementById("lastnum").value 
if(lastnum != ""){
var reqBtn=document.getElementById("requestBtn")
reqBtn.style.backgroundColor=" rgba(68, 3, 13,1)"
reqBtn.removeAttribute("disabled")
}
var lastOtp=document.getElementById("lastOtp").value 
if(lastOtp != ""){
var verBtn=document.getElementById("verifyBtn")
verBtn.style.backgroundColor="rgba(235, 32, 66,1)"
verBtn.removeAttribute("disabled")
}

}
document.querySelector("#requestBtn").addEventListener("click",requestFun)
function requestFun(){
event.preventDefault()
alert("Your OTP is - 1234")
}

document.querySelector("#verifyBtn").addEventListener("click",verifyFun)
function verifyFun(){
event.preventDefault()
 var firstOTP=document.querySelector("#fOTP").value 
 var secOTP=document.querySelector("#sOTP").value 
 var thirdOTP=document.querySelector("#tOTP").value
 var lastOtp=document.getElementById("lastOtp").value  
if(firstOTP=="1" && secOTP=="2" && thirdOTP=="3" && lastOtp=="4" ){
window.location.href="userdetail.html"
}
else{
alert("OTP is wrong. Please enter correct OTP.")
}

}

