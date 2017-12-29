/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function  myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {

    var dropdowns = document.getElementsByClassName("dropdown-content2");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }
  }
}




