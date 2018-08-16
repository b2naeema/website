// This is counter function for the like button, so everytime it is clicked the counter goes up by 1
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;} 
})();

function myFunction(){
    document.getElementById("counter").innerHTML = add(); // get counter button and add 1 like

}

/* 

#code to add like counts permenantly to local storage

function myFunction() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("counter").innerHTML =  localStorage.clickcount;
    } else {
        document.getElementById("counter").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

*/ 

(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

})();

//This is the function for google maps to show fixed location of shenzhen
function initMap() {

		var location = {lat:22.543096, lng: 114.057865 }; //postion of location
		var map = new google.maps.Map(document.getElementById("map"), {
				zoom: 10, //fixed zoom in map
				center: location 
		}); 
		var marker = new google.maps.Marker({ //pinpoint location on map
				position: location, 
				map: map 
		});
}

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].ClassName += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
