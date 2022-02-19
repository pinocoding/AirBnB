var navBar = document.getElementById("navBar");
var navLinks = document.getElementsByTagName(".nav-links li a");
var menuIcon = document.querySelector(".menuIcon");
console.log(navLinks);
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};