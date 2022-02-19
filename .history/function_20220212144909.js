var navBar = document.getElementById("navBar");
var navLinks = document.getElementsByTagName(".nav-links li a");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
for (var i = 0; i < navLinks.length; i++) {
    var blem = navLinks[i];
}

navLinks.onmouseover = function() {
    console.log("1");
};