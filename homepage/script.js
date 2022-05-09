
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  showSlides(prodIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  showSlides(prodIndex = n)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let prodIndex = 1;
showProd(prodIndex);

function showProd(n) {
  let j;
  let productSlides = document.getElementsByClassName("quickSlide");
  if (n > productSlides.length) {prodIndex = 1}
  if (n < 1) {prodIndex = productSlides.length}
  for (j = 0; j < productSlides.length; j++) {
    productSlides[j].style.display = "none";
  }
  // for (j = 0; j < dots.length; j++) {
  //   dots[j].className = dots[j].className.replace(" active", "");
  // }
  productSlides[prodIndex-1].style.display = "block";
  dots[prodIndex-1].className += " active";
}

// navbar.js part
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

//  bottomjs part
   
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