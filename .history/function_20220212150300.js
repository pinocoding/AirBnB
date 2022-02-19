var navBar = document.getElementById("navBar");
var navLinks = document.getElementsByClassName("navtag");
var menuIcon = document.querySelector(".menuIcon");
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};
navLinks.onmouseout = function() {

}