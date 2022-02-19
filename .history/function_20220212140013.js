var navBar = document.getElementById("navBar");
var navLinks = document.getElementsByClassName("nav-links .li");
var menuIcon = document.querySelector(".menuIcon");
console.log(navLinks);
menuIcon.onclick = function() {
    navBar.classList.toggle("hidemenu");
};